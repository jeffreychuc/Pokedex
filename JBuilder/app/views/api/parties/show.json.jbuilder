json.extract! @party, :name, :location
json.guests @party.guests do |guest|
  json.partial! '/api/guests/guest', guest: guest
  json.gifts guest.gifts do |gift|
    json.partial! 'api/gifts/gift', gift: gift
  end
end


# json.name @party.name

# json.guests @party.guests do |guest|
#   json.name guest.name
#   json.gifts guest.gifts, :title
# end