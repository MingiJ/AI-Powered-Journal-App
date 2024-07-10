def longest_consecutive(nums):
    sorted_nums = set(sorted(nums))
    count = 1
    
    for i in range(len(nums)):
        if nums[i] + 1 != nums[i+1]:
            count = 1
        else:
            count += 1
    return count


longest_consecutive([0,3,2,5,4,6,1,1])