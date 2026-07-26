// Wappa 5: custom Haste potion brewing (replaces Unusual End's default recipe)
// MoreJS 0.16 / KubeJS 2101.x: binding is 'MoreJS', event lives in server_scripts
MoreJS.registerPotionBrewing(event => {
    // remove Unusual End's original haste brewing chains
    event.removePotionBrewing({ output: 'unusualend:haste' });
    event.removePotionBrewing({ output: 'unusualend:advanced_haste' });
    // Awkward + Golden Apple -> Potion of Haste
    event.addPotionBrewing('minecraft:golden_apple', 'minecraft:awkward', 'unusualend:haste');
    // Haste + Glowstone Dust -> Potion of Haste II
    event.addPotionBrewing('minecraft:glowstone_dust', 'unusualend:haste', 'unusualend:advanced_haste');
});
