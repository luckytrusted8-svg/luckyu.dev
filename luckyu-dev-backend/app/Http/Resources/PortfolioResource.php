<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Portfolio */
class PortfolioResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'category' => new PortfolioCategoryResource($this->whenLoaded('category')),
            'tech_stack' => $this->tech_stack,
            'demo_url' => $this->demo_url,
            'github_url' => $this->github_url,
            'is_featured' => $this->is_featured,
            'thumbnail' => $this->getFirstMedia('thumbnail')
                ? new MediaResource($this->getFirstMedia('thumbnail'))
                : null,
            'gallery' => MediaResource::collection($this->getMedia('gallery')),
        ];
    }
}
