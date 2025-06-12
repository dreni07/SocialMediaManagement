<?php

namespace App\Interfaces;

interface SocialMediaAuthentication
{
    //

    // authenticate logic
    public function authenticate();

    // redirect to the providers page for authentication
    public function redirectToProvider();

    // this it's going to be used when the authentication is done
    public function handleProviderCallback();

    // process userData after the authentication is done
    public function processUserData();

    // use this to actually log the user out
    public function disconnect();
}
