# Identicon Generator

**Link:** [identicon-generator](https://identicon-generator.netlify.app/)

A simple tool to generate unique identicon for a given phrase. Created using Elixir and served through an Express Node API.

<p align="center">
  <img src="https://user-images.githubusercontent.com/55014143/154839522-53e1dea6-20cd-4d26-a22d-04dea16f6d6a.png">
</p>


## Steps to deploy app on Gigalixir

1. After pushing the changes to gigalixir, ssh into the app using the command ```gigalixir ps:ssh```. Make sure to do this inside the project's root directory.

2. Run `apt-get install elixir`.

3. `cd identicon-generator/ && mix deps.get`.

4. Now inside the same directory compile the project for the first time using - `iex -S mix`. It will prompt to install `rebar`. Proceed with the installation.

5. Now the app can generate identicon from the [webpage](https://identicon-generator.netlify.app).