<?php

return [

    'disk_name' => env('MEDIA_DISK', 'public'),

    'max_file_size' => 1024 * 1024 * 10, // 10MB

    'queue_conversions_by_default' => env('QUEUE_CONVERSIONS_BY_DEFAULT', true),

    'media_model' => Spatie\MediaLibrary\MediaCollections\Models\Media::class,

    'temporary_directory_path' => null,

    'image_driver' => env('IMAGE_DRIVER', 'gd'),

    'image_optimizers' => [],

    'responsive_images' => [
        'width_calculator' => Spatie\MediaLibrary\ResponsiveImages\WidthCalculator\FileSizeOptimizedWidthCalculator::class,
        'use_tiny_placeholders' => true,
    ],

    'enable_vapor_uploads' => env('ENABLE_VAPOR_UPLOADS', false),

    'default_filesystem' => env('MEDIA_DISK', 'public'),
];
