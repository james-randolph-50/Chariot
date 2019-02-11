# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cars = Car.create([
    {
        name: 'Telsa Model 3',
        price: 65000,
        img_url: 'data:image/jpeg;base64,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',
        year: 2018
    },
    {
        name: 'Mercedes G 550 SUV',
        price: 125000,
        img_url: 'https://www.mbusa.com/content/dam/mb-nafta/us/myco/my19/g/global-nav/2019-G-CLASS-SUV-GLOBAL-NAV-DR.png',
        year: 2018
    },
])