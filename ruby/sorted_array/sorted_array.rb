def merge_sorted_arrays(arr1, arr2)
  return arr2 if arr1.empty? || arr1.any? { |el| !el.is_a?(Integer) }
  return arr1 if arr2.empty? || arr2.any? { |el| !el.is_a?(Integer) }

  merged_array = []

  until arr1.empty? || arr2.empty?
    if arr1.first < arr2.first
      merged_array << arr1.shift
    else
      merged_array << arr2.shift
    end
  end

  # Add remaining elements of arr1 or arr2
  merged_array += arr1 + arr2

  merged_array
end

# Example usage:
arr1 = [1, 3, 5, 7, 9]
arr2 = [2, 4, 6, 8, 10]

merged_array = merge_sorted_arrays(arr1, arr2)
puts merged_array.inspect
