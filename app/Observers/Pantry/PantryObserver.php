<?php

namespace App\Observers\Pantry;

use App\Models\Pantry\Pantry;
use App\Models\Pantry\PantrySetting;

class PantryObserver
{
    /**
     * Handle the Pantry "created" event.
     *
     * @param Pantry $pantry
     * @return void
     */
    public function created(Pantry $pantry)
    {
        PantrySetting::create([
            'pantry_id' => $pantry->id
        ]);
    }

    /**
     * Handle the Pantry "updated" event.
     *
     * @param Pantry $pantry
     * @return void
     */
    public function updated(Pantry $pantry)
    {
        //
    }

    /**
     * Handle the Pantry "deleted" event.
     *
     * @param Pantry $pantry
     * @return void
     */
    public function deleted(Pantry $pantry)
    {
        //
    }

    /**
     * Handle the Pantry "restored" event.
     *
     * @param Pantry $pantry
     * @return void
     */
    public function restored(Pantry $pantry)
    {
        //
    }

    /**
     * Handle the Pantry "force deleted" event.
     *
     * @param Pantry $pantry
     * @return void
     */
    public function forceDeleted(Pantry $pantry)
    {
        //
    }
}
