ModAPI.addAPICallback("ICore", function(api){
	Launch({
		ICore: api,
		MobEffect: Native.PotionEffect,
		ChatColor: Native.ChatColor
	});
});
