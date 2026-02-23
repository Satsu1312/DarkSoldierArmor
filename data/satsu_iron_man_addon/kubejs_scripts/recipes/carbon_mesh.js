// Smelting recipe template

ServerEvents.recipes((event) => {
  event
    .smelting(
      // output item
      "satsu_iron_man_addon:nanopolymer_d_52",
      "satsu_iron_man_addon:nanopolymer_d_52_raw_unit" // input item
    )
    .xp(1.0) // optional: set XP
    .cookingTime(250); // optional: cook time in ticks (200 = 10 seconds)
});
ServerEvents.recipes((event) => {
  event
    event.blasting(
      // output item
      "satsu_iron_man_addon:nanopolymer_d_52",
      "satsu_iron_man_addon:nanopolymer_d_52_raw_unit" // input item
    )
    .xp(1.0) // optional: set XP
    .cookingTime(200); // optional: cook time in ticks (200 = 10 seconds)
});