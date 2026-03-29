// Register custom animations
PalladiumEvents.registerAnimations((event) => {
  event.registerForPower(
    "satsu_iron_man_addon/fly_anim",
    "satsu_iron_man_addon:falcon_wings",
    10,
    (builder) => {
      // Gets the current animation timer progress from the ability, returned value is a number from 0.0 to 1.0
      const progress = animationUtil.getAnimationTimerAbilityValue(
        builder.getPlayer(),
        "satsu_iron_man_addon:falcon_wings",
        "fly_anim",
        builder.getPartialTicks(),
      );

      // only apply animation if progress is above 0!
      if (progress > 0.0) {
        const halfPi = 1.57079632679;

        // if first person
        if (builder.isFirstPerson()) {
          builder
            .get("left_arm")
            .setXRotDegrees(0)
            .setYRotDegrees(0)
            .setZRotDegrees(0)
            .animate("InOutCubic", progress);
        }
        if (builder.isFirstPerson()) {
          builder
            .get("right_arm")
            .setXRotDegrees(0)
            .setYRotDegrees(0)
            .setZRotDegrees(0)
            .animate("InOutCubic", progress);
        } else {
          // third person animations
          builder
            .get("left_arm")
            .setXRotDegrees(-178.87572)
            .setYRotDegrees(86.03725)
            .setZRotDegrees(-275.70107)
            .animate("InOutCubic", progress);
          builder
            .get("right_arm")
            .setXRotDegrees(-178.87572)
            .setYRotDegrees(-86.03725)
            .setZRotDegrees(275.70107)
            .animate("InOutCubic", progress);
          builder;
        }
      }
    },
  );
  event.registerForPower(
    "satsu_iron_man_addon/fly_anim_boost",
    "satsu_iron_man_addon:falcon_wings",
    10,
    (builder) => {
      // Gets the current animation timer progress from the ability, returned value is a number from 0.0 to 1.0
      const progress = animationUtil.getAnimationTimerAbilityValue(
        builder.getPlayer(),
        "satsu_iron_man_addon:falcon_wings",
        "fly_anim_boost",
        builder.getPartialTicks(),
      );

      // only apply animation if progress is above 0!
      if (progress > 0.0) {
        const halfPi = 1.57079632679;

        // if first person
        if (builder.isFirstPerson()) {
          builder
            .get("left_arm")
            .setXRotDegrees(0)
            .setYRotDegrees(0)
            .setZRotDegrees(0)
            .animate("InOutCubic", progress);
        }
        if (builder.isFirstPerson()) {
          builder
            .get("right_arm")
            .setXRotDegrees(0)
            .setYRotDegrees(0)
            .setZRotDegrees(0)
            .animate("InOutCubic", progress);
        } else {
          // third person animations
          builder
            .get("left_arm")
            .setXRotDegrees(-223.37572)
            .setYRotDegrees(86.03725)
            .setZRotDegrees(-275.70107)
            .animate("InOutCubic", progress);
          builder
            .get("right_arm")
            .setXRotDegrees(-223.87572)
            .setYRotDegrees(-86.03725)
            .setZRotDegrees(275.70107)
            .animate("InOutCubic", progress);
          builder;
        }
      }
    },
  );
});
