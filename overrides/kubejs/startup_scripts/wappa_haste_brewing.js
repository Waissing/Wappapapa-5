// Wappa 5: custom Haste potion brewing (replaces Unusual End's default recipe)
MoreJSEvents.registerPotionBrewing((event) => {
    // remove Unusual End's original haste brewing chains
    event.removeByPotion(null, null, 'unusualend:haste');
    event.removeByPotion(null, null, 'unusualend:advanced_haste');
    // Awkward + Golden Apple -> Potion of Haste
    event.addPotionBrewing('minecraft:golden_apple', 'minecraft:awkward', 'unusualend:haste');
    // Haste + Glowstone Dust -> Potion of Haste II
    event.addPotionBrewing('minecraft:glowstone_dust', 'unusualend:haste', 'unusualend:advanced_haste');
});