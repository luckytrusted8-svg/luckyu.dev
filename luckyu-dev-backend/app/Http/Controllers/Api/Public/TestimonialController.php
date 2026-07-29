<?php

namespace App\Http\Controllers\Api\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\TestimonialResource;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::query()
            ->with('media')
            ->where('is_featured', true)
            ->latest()
            ->get();

        return TestimonialResource::collection($testimonials);
    }
}
