select ITEM_ID, ITEM_NAME, RARITY from ITEM_INFO a
WHERE NOT EXISTS (
    select * from ITEM_TREE b
    where b.PARENT_ITEM_ID = a.ITEM_ID)
order by a.ITEM_ID desc
    
