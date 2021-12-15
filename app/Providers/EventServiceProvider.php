<?php

namespace App\Providers;

use App\Models\Pantry\Pantry;
use App\Models\Recipe\Recipe;
use App\Models\Recipe\RecipeDetail;
use App\Models\User;
use App\Observers\Pantry\PantryObserver;
use App\Observers\Recipe\RecipeDetailObserver;
use App\Observers\Recipe\RecipeObserver;
use App\Observers\UserObserver;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        User::observe(UserObserver::class);
        Pantry::observe(PantryObserver::class);
        Recipe::observe(RecipeObserver::class);
        RecipeDetail::observe(RecipeDetailObserver::class);
    }
}
