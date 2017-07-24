@patterns.each do |pattern|
  json.set! pattern.id do
    json.partial! '/api/patterns/pattern', pattern: pattern
  end
end
