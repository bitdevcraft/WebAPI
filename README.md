This will be use as a webapi template using a clean architecture.

# Dotnet EF

Installation
`dotnet tool install --global dotnet-ef --version 8.0.2`

Creation of the Migrations
`dotnet ef migrations add InitialCreate -s API -p Persistence`

# Dependency per Module

## API

- Microsoft.AspNetCore.OpenApi
- Microsoft.EntityFrameworkCore.Design

## Application

- AutoMapper.Extensions.Microsoft.DependencyInjection
- FluentValidation.AspNetCore
- MediatR.Extensions.Microsoft.DependencyInjection

## Persistence

- Microsoft.EntityFrameworkCore.Sqlite

## Domain

- None

## Debugging

Watch the API
`dotnet watch --no-hot-reload`
