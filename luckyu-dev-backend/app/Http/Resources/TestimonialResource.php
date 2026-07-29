<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Testimonial */
class TestimonialResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'client_name' => $this->client_name,
            'company' => $this->company,
            'message' => $this->message,
            'rating' => $this->rating,
            'avatar' => $this->getFirstMedia('avatar') ? new MediaResource($this->getFirstMedia('avatar')) : null,
        ];
    }
}
