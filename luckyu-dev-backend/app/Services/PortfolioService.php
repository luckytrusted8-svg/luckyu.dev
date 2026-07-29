<?php

namespace App\Services;

use App\Models\Portfolio;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;

class PortfolioService
{
    public function create(array $data): Portfolio
    {
        return DB::transaction(fn () => Portfolio::create($data));
    }

    public function update(Portfolio $portfolio, array $data): Portfolio
    {
        DB::transaction(fn () => $portfolio->update($data));

        return $portfolio->fresh();
    }

    public function delete(Portfolio $portfolio): void
    {
        DB::transaction(fn () => $portfolio->delete());
    }

    public function attachThumbnail(Portfolio $portfolio, UploadedFile $file): void
    {
        $portfolio->addMedia($file)
            ->toMediaCollection('thumbnail');
    }

    public function attachGalleryImage(Portfolio $portfolio, UploadedFile $file): void
    {
        $portfolio->addMedia($file)
            ->toMediaCollection('gallery');
    }
}
