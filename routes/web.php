<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LandingPage;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::controller(LandingPage::class)->group(function(){
    Route::get("/","index")->name("landing-page.route");
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
