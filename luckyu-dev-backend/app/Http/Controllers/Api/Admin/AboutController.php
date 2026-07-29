<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\About\UpdateAboutRequest;
use App\Http\Resources\AboutResource;
use App\Models\About;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function update(UpdateAboutRequest $request)
    {
        $about = About::query()->firstOrNew();
        $about->fill($request->validated())->save();

        return new AboutResource($about);
    }

    public function uploadCv(Request $request)
    {
        $request->validate([
            'file' => ['required', 'file', 'mimes:pdf', 'max:5120'],
        ]);

        $about = About::query()->firstOrFail();
        $about->addMedia($request->file('file'))->toMediaCollection('cv');

        return new AboutResource($about->fresh());
    }
}
