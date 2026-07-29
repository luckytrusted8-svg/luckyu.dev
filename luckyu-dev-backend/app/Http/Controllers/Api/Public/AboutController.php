<?php

namespace App\Http\Controllers\Api\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\AboutResource;
use App\Models\About;

class AboutController extends Controller
{
    public function show()
    {
        $about = About::query()->firstOrFail();

        return new AboutResource($about);
    }
}
