<!doctype html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Blog</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href="{{ asset('css/site.css') }}" rel="stylesheet">
    <script>
        window.Laravel = {!! json_encode([
                'csrfToken' => csrf_token(),
            ]) !!};
    </script>
</head>
<body>
    <div id="app">
            @if (Route::has('login'))
                <div class="top-right links">
                    @if (Auth::check())
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ url('/login') }}">Login</a>
                    @endif
                </div>
            @endif
        <header>
            <div class="brand">
                <div class="logo">Blog</div>
                <div class="sublogo">- posts -</div>
            </div>
        </header>
        <section>
            @yield('content')
        </section>
        <footer>
            <div class="title">Welcome</div>
        </footer>
    </div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
