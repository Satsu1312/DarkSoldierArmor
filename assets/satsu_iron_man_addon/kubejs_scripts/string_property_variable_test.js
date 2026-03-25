
PalladiumEvents.registerPropertiesClientSided((event) => {
  // Only register for players
  if (event.getEntityType() === "minecraft:player") {
    // Arguments: Key of the property, type of the property, default/starting value
    event.registerProperty("satsu_iron_man_addon_dark_tech_falcon_wings", "string", "off");
  }
});