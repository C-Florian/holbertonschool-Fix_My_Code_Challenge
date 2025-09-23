#!/usr/bin/ruby
# Sort integers from command line arguments in ascending order

if ARGV.empty?
  puts "Usage: ./2-sort.rb <list of numbers>"
  exit 1
end

numbers = []

ARGV.each do |arg|
  begin
    numbers << Integer(arg)
  rescue ArgumentError
    # ignore non-integers
  end
end

numbers.sort.each { |n| puts n }
