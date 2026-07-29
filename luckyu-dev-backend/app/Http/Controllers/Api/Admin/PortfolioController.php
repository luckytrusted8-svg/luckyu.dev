<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Portfolio\StorePortfolioRequest;
use App\Http\Requests\Portfolio\UpdatePortfolioRequest;
use App\Http\Resources\PortfolioResource;
use App\Models\Portfolio;
use App\Services\PortfolioService;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function __construct(private readonly PortfolioService $portfolioService)
    {
    }

    public function index()
    {
        $portfolios = Portfolio::with(['category', 'media'])
            ->orderBy('order')
            ->paginate(15);

        return PortfolioResource::collection($portfolios);
    }

    public function store(StorePortfolioRequest $request)
    {
        $portfolio = $this->portfolioService->create($request->validated());

        return new PortfolioResource($portfolio->load(['category', 'media']));
    }

    public function show(Portfolio $portfolio)
    {
        $this->authorize('view', $portfolio);

        return new PortfolioResource($portfolio->load(['category', 'media']));
    }

    public function update(UpdatePortfolioRequest $request, Portfolio $portfolio)
    {
        $updated = $this->portfolioService->update($portfolio, $request->validated());

        return new PortfolioResource($updated->load(['category', 'media']));
    }

    public function destroy(Portfolio $portfolio)
    {
        $this->authorize('delete', $portfolio);

        $this->portfolioService->delete($portfolio);

        return response()->noContent();
    }

    public function uploadMedia(Request $request, Portfolio $portfolio)
    {
        $this->authorize('update', $portfolio);

        $request->validate([
            'file' => ['required', 'image', 'max:5120'],
            'collection' => ['required', 'in:thumbnail,gallery'],
        ]);

        $collection = $request->string('collection');

        $collection === 'thumbnail'
            ? $this->portfolioService->attachThumbnail($portfolio, $request->file('file'))
            : $this->portfolioService->attachGalleryImage($portfolio, $request->file('file'));

        return new PortfolioResource($portfolio->fresh(['category', 'media']));
    }
}
