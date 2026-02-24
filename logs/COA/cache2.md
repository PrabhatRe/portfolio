Previously we looked at different kinds of mapping and the basic functionality of cache, but how do tag, index, and offset actually make sense to the cache? Obviously, that’s not how a cache’s point of view looks.

Index -> 0 : valid | dirty | tag | data block  
Index -> 1 : v | d | t | data block  

The translation is done by cache controller hardware. The CPU generates an address. The cache hardware splits it into tag, index, and offset. The controller fetches `cache[index]`, then compares:

stored_tag == address_tag  
AND  
valid == 1  

Cool!!!.

But why the valid bit though? It acts like a two-step verification.

Initially, on power-on:
valid = 0  
tag = garbage  
data block = garbage  

So even if stored_tag accidentally matches address_tag, it is still a miss because valid = 0.

When is it set to 1?

When a miss occurs, the correct block is fetched from main memory, the tag field is updated, and valid is set to 1.

A cache hit occurs if and only if:
valid == 1 AND stored_tag == address_tag.

---

On the occasion of a cache miss, different replacement policies exist — but only when there is no empty space available in the cache set where the data block can be placed.  

If space exists, we just place it there (except in direct mapping — there’s only one slot, so no choice, :( .

Replacement policies make sense only for set-associative or fully associative caches.

- Least Recently Used (LRU)  
- Least Frequently Used (LFU)  
- First In First Out (FIFO)  
- Optimal (mostly theoretical — how would you know the future access pattern? Future isn’t determined… unless you pretend it is. People do change.)

These are mostly self-explanatory.

---

Similarly, there are two different write policies (assuming the data block is already in cache):

**Write-through**  
Update cache immediately AND update main memory immediately.  
Dirty bit is not required.

**Write-back**  
Update cache only. Main memory is updated when the block is removed from the cache.  
This is tracked using the dirty bit.  

If dirty bit = 1 → update main memory on eviction.  
Else → nah.

---

Now suppose there is a cache miss, but it is a *write miss*.

We have two options:

**Write-allocate**  
Fetch the block from main memory into cache, apply replacement policy if needed, then perform the write.

**No-write-allocate**  
Update the main memory directly by the CPU. The block is not brought into cache.  
(Fun fact: no-write-allocate prevents any replacement policy from being triggered for that write miss — kinda obvious.)

---

Common pairings:

Write-allocate  <==>  Write-back  
No-write-allocate  <==>  Write-through  

Weirdly uncomfortable why those pairs are working good together


**Write-back + Write-allocate**
- Bring new block into cache  
- Keep updating it without disturbing main memory  
- When finally evicting, update main memory  

This increases efficiency for repeated writes.

**Write-through + No-write-allocate**
- Every write immediately updates main memory  
- So during a write miss, there is no strong reason to bring the block into cache  
- Just update memory directly and move on  

*Simple only*