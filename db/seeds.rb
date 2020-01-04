200.times do
  name = Faker::Superhero.name
  power = Faker::Superhero.power
  avatar = Faker::Avatar.image(name, '100x400', 'png', 'set4')
  Hero.create(name: name, power: power, avatar: avatar)
  
end


puts "200 Heroes Seeded"