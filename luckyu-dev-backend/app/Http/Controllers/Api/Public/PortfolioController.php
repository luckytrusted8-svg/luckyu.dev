<?php

namespace App\Http\Controllers\Api\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\PortfolioResource;
use App\Models\Portfolio;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index(Request $request)
    {
        $portfolios = Portfolio::query()
            ->with(['category', 'media'])
            ->when($request->query('category'), function ($query, $categorySlug) {
                $query->whereHas('category', fn ($q) => $q->where('slug', $categorySlug));
            })
            ->orderBy('order')
            ->orderByDesc('created_at')
            ->get();

        return PortfolioResource::collection($portfolios);
    }

    public function show(Portfolio $portfolio)
    {
        $portfolio->load(['category', 'media']);

        return new PortfolioResource($portfolio);
    }
}
