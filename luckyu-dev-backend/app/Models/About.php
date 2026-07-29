<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class About extends Model
{
    use InteractsWithMedia;

    protected $fillable = [
        'title',
        'description',
        'years_experience',
        'projects_completed',
        'happy_clients',
        'satisfaction_rate',
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('photo')->singleFile();
        $this->addMediaCollection('cv')->singleFile();
    }
}
