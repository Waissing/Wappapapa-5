// Wappa 5: custom crafting recipes
ServerEvents.recipes(event => {
    // feather + raw chicken + feather -> pigeon spawn egg (Envelope)
    event.shaped('envelope:pigeon_spawn_egg', [
        'FCF'
    ], {
        F: 'minecraft:feather',
        C: 'minecraft:chicken'
    });
});
