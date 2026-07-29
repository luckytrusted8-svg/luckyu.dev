<?php

namespace App\Http\Controllers\Api\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResource;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::query()->orderBy('order')->get();

        return ServiceResource::collection($services);
    }

    public function show(Service $service)
    {
        return new ServiceResource($service);
    }
}
