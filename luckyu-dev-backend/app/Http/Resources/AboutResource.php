<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\About */
class AboutResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'description' => $this->description,
            'photo' => $this->getFirstMedia('photo') ? new MediaResource($this->getFirstMedia('photo')) : null,
            'cv_url' => $this->getFirstMedia('cv')?->getUrl(),
            'years_experience' => $this->years_experience,
            'projects_completed' => $this->projects_completed,
            'happy_clients' => $this->happy_clients,
            'satisfaction_rate' => $this->satisfaction_rate,
        ];
    }
}
