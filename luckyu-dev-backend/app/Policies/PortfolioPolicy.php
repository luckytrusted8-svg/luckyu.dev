<?php

namespace App\Policies;

use App\Models\Portfolio;
use App\Models\User;

class PortfolioPolicy
{
    public function viewAny(?User $user): bool
    {
        return true; // public read
    }

    public function view(?User $user, Portfolio $portfolio): bool
    {
        return true; // public read
    }

    public function create(User $user): bool
    {
        return $user->hasRole('admin');
    }

    public function update(User $user, Portfolio $portfolio): bool
    {
        return $user->hasRole('admin');
    }

    public function delete(User $user, Portfolio $portfolio): bool
    {
        return $user->hasRole('admin');
    }
}
