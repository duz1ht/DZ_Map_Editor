// Auto-generated embedded text resources for file:// fallback
window.BHD_EMBEDDED_RESOURCES = {
  "resources/weapon.def": `


ammoclass_max_carry CLASS_MANA		500
ammoclass_max_carry CLASS_RGRENADE	30	
ammoclass_max_carry CLASS_GRENADEHE 5	
ammoclass_max_carry CLASS_GRENADEFB 5	
ammoclass_max_carry CLASS_GRENADESM 3	

ammoclass_max_carry CLASS_45cal		28
ammoclass_max_carry CLASS_9mm		30
ammoclass_max_carry CLASS_9MMSMG	300
ammoclass_max_carry CLASS_SGSHELL	14
ammoclass_max_carry CLASS_556MM		830	
ammoclass_max_carry CLASS_556MMSAW	600
ammoclass_max_carry CLASS_762MMAUTO	600
ammoclass_max_carry CLASS_762HPBT	200
ammoclass_max_carry CLASS_50CAL		100
ammoclass_max_carry CLASS_300MAG	180
ammoclass_max_carry CLASS_40MMNADE	6
ammoclass_max_carry CLASS_SATCHEL	2
ammoclass_max_carry CLASS_CLAYMORE	2
ammoclass_max_carry CLASS_AT4		1





weapon "WPN_KNIFE"
	category 1
	rank     0
	statid 100

	charfilter cqb
	charfilter medic
	charfilter sniper
	charfilter gunner

	round_type  "AMMO_KNIFE01"
	clipsize    -1
	startrounds -1
	error_hip	0 
	error_up  	0 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	launchuserpoint bullet

	attack_anim	 1		
	special_hold 1		
	run_anim	 1		

	flags Underwater

	crosshair coma20mm.tga
	hudicon H_knife.tga

	animadm m9k_1st

	gfx1 M9k_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
  	gfx3 M9K_3rd 
	pos  4 -5 -186 0 0 0

	action "idle"
		delayend		  auto
		anim		  anim_wpn_idle
		function      wpn_std_idle
	end	

	action "emptyidle"
		function			wpn_std_emptyidle
	end	

	action "fire"
		delayend		  auto
		soundsetend	  GS_KNIFE
		anim		  anim_wpn_fire
		function      wpn_std_fire
	end

	action "recoil"
		delayend		  auto
		anim		  anim_wpn_recoil
		function      wpn_std_recoil
	end

	action "reload"
		delayend		  auto
		anim		  anim_wpn_reload
		function      wpn_std_reload
	end

	action "empty"
		delayend		  auto
		anim		  anim_wpn_empty
		function      wpn_std_empty
	end

	action "switchto"
		soundset	GF_KNIFE_ST
		delaystart		1
		delayend		1
		anim		  anim_wpn_switchto
		function      wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_KNIFE_SF
		delaystart		1
		delayend		1
		anim		  anim_wpn_switchfrom
		function      wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim		  anim_wpn_switchrank
		function      wpn_std_switchrank
	end
end


weapon "WPN_colt45"
	category 2
	rank     0
	statid 200

	charfilter cqb
	charfilter medic
	charfilter sniper
	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_COLT45
	loadout_menu_ttdesc WEAP_DESC_COLT45
	weapon_class	secondary

	round_type		"AMMO_COLT_45"
	clipsize		7
	startrounds		28
	error_hip	1.00 
	error_up  	.50 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_45cal		1
	launchuserpoint bullet

	special_hold 1		

	animadm colt_1st

	gfx1 colt_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 colt_3rd
    pos  -76 -13 -174 0 0 0
  	tpos -47 -13 -159 0 0 0


	crosshair coma20mm.tga
	hudicon H_colt.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 8  0 18 0 1	H_round.tga	    

	action "idle"
		delayend				auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend				auto
		soundsetend			GS_45
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_Colt45MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			0
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_Colt45Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			90
		delayend				auto
		soundset			GF_BERETTA_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_PISTOL  
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_45_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_45_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end

weapon "WPN_M9Beretta"
	category 2
	rank     1
	statid	201

	charfilter cqb
	charfilter medic
	charfilter sniper
	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_M9BERETTA
	loadout_menu_ttdesc WEAP_DESC_M9BERETTA
	weapon_class	secondary

	round_type		"AMMO_BERETTA_9MM"
	clipsize		15
	startrounds		30
	error_hip	.90 
	error_up  	.45 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_9mm		1
	launchuserpoint bullet

	special_hold 1		

	animadm M9_1st

	gfx1 M9_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 M9_3RD
    pos  -76 -13 -174 0 0 0
  	tpos -47 -13 -159 0 0 0


	crosshair coma20mm.tga
	hudicon H_bereta.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 6  0 8 0 1	H_round.tga	    

	action "idle"
		delayend				auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend				auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend				auto
		soundsetend			GS_BERETTA
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_BrtaMuzFlash
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			0
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_BrtaBCasing
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			100
		delayend				auto
		soundset			GF_BERETTA_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_PISTOL	 
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_45_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_45_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end

weapon "WPN_RemmingtonSG"
	category 2
	rank     2
	statid 202

	charfilter cqb
	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_SHOTGUN
	loadout_menu_ttdesc WEAP_DESC_SHOTGUN
	weapon_class	secondary

	round_type		"AMMO_SHOTGUN"
	clipsize		7
	startrounds		14
	error_hip	 0   
	error_up  	 0  
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_SGSHELL		1
	launchuserpoint bullet

	special_hold 0		

	animadm shtg_1st

	gfx1 shtg_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 shtg_3RD
  	pos  24 20 -182 0 0 0

	crosshair coma20mm.tga
	hudicon H_shtgun.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 8  0 18 0 1	H_round.tga	    

	action "idle"
		delayend				auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend				auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend				auto
		soundsetend			GS_12GAGE_REMM
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_RemingtonSGMF
		particleuserpoint	mflash01
	end

	action "recoil"
		delaystart			10
		delayend			auto
		soundset			GF_12GAGE_REC
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_RemingtonShel
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			100
		delayend				auto
		soundset			GF_12GAGE_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_12GAGE
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_12GAGE_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_12GAGE_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		61
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_CAR15AUTO"
	category 3
	rank     0
	statid 300

	charfilter cqb
	charfilter medic
	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	1	

	loadout_menu_icon	car15.tga
	loadout_menu_textid	WEAP_SHORT_CAR15
	loadout_menu_ttdesc WEAP_DESC_CAR15
	weapon_class	primary

	round_type		"AMMO_CAR15_556MM"
	clipsize		30
	startrounds		300
	error_hip	.8	
	error_up  	.05  
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_556MM	1
	clipslot		1
	launchuserpoint bullet

	flags auto
	flags Sighted

	sights  car15aim.tga   112  0 889 768 blend
	sights  car15gls.tga   112  0 896 774 multiplyat
	sights  reddot1.tga    496  368 527 399 add		scale

	crosshair coma20mm.tga
	hudicon H_cr15a.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 1	H_round.tga	    

	animadm CR15_1st

	gfx1 CR15_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 CR15_3RD
  	pos  -18 29 -171 0 0 0
	tpos -62 45 -160 0 0 0

	action "idle"
		delayend				auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend				auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend				auto
		soundsetend			GS_CAR151
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_CAR15MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			2
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_CAR15Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			100
		delayend			auto
		soundset			GF_CAR15_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_OICW	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_CAR15_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_CAR15_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end

weapon "WPN_CAR15"
	category 3
	rank     1
	statid 301

	charfilter cqb
	charfilter medic
	charfilter gunner

	round_type		"AMMO_CAR15_556MM"
	clipsize		30
	startrounds		0
	error_hip	.8 
	error_up  	.05 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_556MM	1
	clipslot		1
	launchuserpoint bullet

	flags Sighted
	flags Primary

	sights  car15aim.tga   112  0 889 768 blend
	sights  car15gls.tga   112  0 896 774 multiplyat
	sights  reddot1.tga    496  368 527 399 add		scale

	crosshair coma20mm.tga
	hudicon H_cr15s.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 1	H_round.tga	    

	animadm CR15_1st

	gfx1 CR15_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 CR15_3RD
  	pos  -18 29 -171 0 0 0
	tpos -62 45 -160 0 0 0

	action "idle"
		delayend		  auto
		anim		  anim_wpn_idle
		function      wpn_std_idle
	end	

	action "emptyidle"
		delayend		  auto
		anim		  anim_wpn_idle
		function      wpn_std_idle
	end	

	action "fire"
		delayend				auto
		soundsetend			GS_CAR151
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_CAR15MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			2
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_CAR15Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			100
		delayend			auto
		soundset			GF_CAR15_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_OICW	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset			GF_CAR15_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset				GF_CAR15_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_CAR15M203AUTO"
	category 3
	rank     2
	statid 302

	charfilter cqb
	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	2	

	loadout_menu_icon	car15.tga
	loadout_menu_textid	WEAP_SHORT_CAR15M203
	loadout_menu_ttdesc WEAP_DESC_CAR15M203
	weapon_class	primary

	round_type		"AMMO_CAR15_556MM"
	clipsize		30
	startrounds		0
	error_hip	.9 
	error_up  	.1 
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_556MM	1
	clipslot		2
	launchuserpoint bullet

	flags auto
	flags Sighted

	sights  car15aim.tga   112  0 889 768 blend
	sights  car15gls.tga   112  0 896 774 multiplyat
	sights  reddot1.tga    496  368 527 399 add		scale

	crosshair coma20mm.tga
	hudicon H_cr203a.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 1	H_round.tga	    

	animadm m203_1st

	gfx1 CR203_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 CR203_3RD
  	pos  -18 29 -171 0 0 0
	tpos -62 45 -160 0 0 0

	action "idle"
		delayend				auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend				auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend				auto
		soundsetend			GS_CAR151
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_CAR15MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			2
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_CAR15Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			100
		delayend			auto
		soundset			GF_CAR15_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_OICW	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_CAR15_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_CAR15_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end

weapon "WPN_CAR15M203"
	category 3
	rank     3
	statid 303


	charfilter cqb
	charfilter gunner

	round_type		"AMMO_CAR15_556MM"
	clipsize		30
	startrounds		300
	error_hip	.9 
	error_up  	.1 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_556MM	1
	clipslot		2
	launchuserpoint bullet

	flags Sighted
	flags Primary

	sights  car15aim.tga   112  0 889 768 blend
	sights  car15gls.tga   112  0 896 774 multiplyat
	sights  reddot1.tga    496  368 527 399 add		scale

	crosshair coma20mm.tga
	hudicon H_cr203s.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 1	H_round.tga	    

	animadm m203_1st

	gfx1 cr203_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 CR203_3RD
  	pos  -18 29 -171 0 0 0
	tpos -62 45 -160 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "fire"
		delayend				auto
		soundsetend			GS_CAR151
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_CAR15MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			2
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_CAR15Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			100
		delayend			auto
		soundset			GF_CAR15_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_OICW	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset			GF_CAR15_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset				GF_CAR15_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_CAR15M203HE"
	category 3
	rank     4
	statid 304


	charfilter cqb
	charfilter gunner

	round_type		"AMMO_M203_40MM_NADE"
	clipsize		1
	startrounds		6
	error_hip	1.4  
	error_up  	.7  
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_40MMNADE	1
	launchuserpoint bullet

	flags Sighted
	flags	AutoLob

	scope_max_zero 10 50 0
	sights  car15aim.tga   112  0 889 768 blend
	sights  car15gls.tga   112  0 896 774 multiplyat
	sights  reddot1.tga    496  368 527 399 add		scale

	crosshair coma20mm.tga
	hudicon H_cr203g.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 12  0 20 0 1	H_round.tga	    

	animadm m203_2nd

	gfx1 CR203_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 CR203_3RD
  	pos  -18 29 -171 0 0 0
	tpos -62 45 -160 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend				auto
		soundsetend			GS_M203_GLAUNCH
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M4GrenMF
		particleuserpoint	mflash02
	end

	action "recoil"
		delayend			6
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		
		
	end

	action "reload"
		delaystart			auto
		soundset			GF_M203G_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend			auto
		soundset			DRY_OICW 
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_CAR15_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_CAR15_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_M16BURST"
	category 3
	rank     5
	statid 305


	charfilter cqb
	charfilter medic
	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	1	

	loadout_menu_icon	car15.tga
	loadout_menu_textid	WEAP_SHORT_M16
	loadout_menu_ttdesc WEAP_DESC_M16
	weapon_class	primary

	round_type		"AMMO_M16_556MM"
	clipsize		30
	startrounds		300
	error_hip	.6 
	error_up  	.05 
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_556MM	1
	clipslot		3
	launchuserpoint bullet

	flags burst
	flags Sighted

	sights  M16irnA.tga   128  0   897 768 blend
    sights  M16irnB.tga   447  356 576 485 blend

	crosshair coma20mm.tga
	hudicon H_16a.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 1	H_round.tga	    

	animadm m16_1st

	gfx1 m16_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 m16_3RD
  	pos  -18 29 -171 0 0 0
	tpos -62 45 -160 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend				auto
		soundsetend			GS_M16
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M16MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			2
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_M16Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			100
		delayend			auto
		soundset			GF_M16_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_M16	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_CAR15_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_CAR15_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end

weapon "WPN_M16"
	category 3
	rank     6
	statid 306

	charfilter cqb
	charfilter medic
	charfilter gunner

	round_type		"AMMO_M16_556MM"
	clipsize		30
	startrounds		0
	error_hip	.6 
	error_up  	.05 
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_556MM	1
	clipslot		3
	launchuserpoint bullet

	flags Sighted

	sights  M16irnA.tga   128  0   897 768 blend
    sights  M16irnB.tga   447  356 576 485 blend


	crosshair coma20mm.tga
	hudicon H_16s.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 1	H_round.tga	    

	animadm m16_1st

	gfx1 m16_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 m16_3RD
  	pos  -18 29 -171 0 0 0
	tpos -62 45 -160 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend				auto
		soundsetend			GS_M16
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M16MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			2
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_M16Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			100
		delayend			auto
		soundset			GF_M16_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_M16	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_CAR15_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_CAR15_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_M16M203BURST"
	category 3
	rank     7
	statid 307

	charfilter cqb
	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	2	

	loadout_menu_icon	car15.tga
	loadout_menu_textid	WEAP_SHORT_M16M203
	loadout_menu_ttdesc WEAP_DESC_M16M203
	weapon_class	primary

	round_type		"AMMO_M16_556MM"
	clipsize		30
	startrounds		300
	error_hip	.7 
	error_up  	.1 
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_556MM	1
	clipslot		4
	launchuserpoint bullet

	flags burst
	flags Sighted

	sights  M16irnA.tga   128  0   897 768 blend
    sights  M16irnB.tga   447  356 576 485 blend

	crosshair coma20mm.tga
	hudicon H_16203a.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 1	H_round.tga	    

	animadm m203_1st

	gfx1 m203_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 m203_3RD
  	pos  -18 29 -171 0 0 0
	tpos -62 45 -160 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend				auto
		soundsetend			GS_M16
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M16MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			2
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_M16Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			auto
		soundset			GF_M16_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_M16	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_CAR15_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_CAR15_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end

weapon "WPN_M16M203"
	category 3
	rank     8
	statid 308


	charfilter cqb
	charfilter gunner

	round_type		"AMMO_M16_556MM"
	clipsize		30
	startrounds		0
	error_hip	.7 
	error_up  	.1 
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_556MM	1
	clipslot		4
	launchuserpoint bullet

	flags Sighted

	sights  M16irnA.tga   128  0   897 768 blend
    sights  M16irnB.tga   447  356 576 485 blend

	crosshair coma20mm.tga
	hudicon H_16203s.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 1	H_round.tga	    

	animadm m203_1st

	gfx1 m203_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 m203_3RD
  	pos  -18 29 -171 0 0 0
	tpos -62 45 -160 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend				auto
		soundsetend			GS_M16
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M16MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			2
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_M16Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			100
		delayend			auto
		soundset			GF_M16_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_M16	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_CAR15_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_CAR15_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end



weapon "WPN_M16M203HE"
	category 3
	rank     9
	statid 309

	charfilter cqb
	charfilter gunner

	round_type		"AMMO_M203_40MM_NADE"
	clipsize		1
	startrounds		6
	error_hip	1.4 
	error_up  	.7  
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_40MMNADE	1
	launchuserpoint bullet

	flags Sighted
	flags	AutoLob

	scope_max_zero 10 50 0
	sights  m16203a.tga   112  0 883 768 blendat
    sights  M16irnB.tga   447  356 576 485 blend
	sights  m16203b.tga   112  -68 892 703 blendat slide 33

	crosshair coma20mm.tga
	hudicon H_16203g.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 12  0 20 0 1	H_round.tga	    

	animadm m203_2nd

	gfx1 m203_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 m203_3RD
  	pos  -18 29 -171 0 0 0
	tpos -62 45 -160 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend				auto
		soundsetend			GS_M203_GLAUNCH
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M4GrenMF
		particleuserpoint	mflash02
	end

	action "recoil"
		delayend			6
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		
		
	end

	action "reload"
		delaystart			100
		delayend			auto
		soundset			GF_M203G_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_OICW 
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_CAR15_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_CAR15_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_M21"
	category 3
	rank     10
	statid 310


	charfilter sniper

	flags Sniper

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_M21
	loadout_menu_ttdesc WEAP_DESC_M21
	weapon_class	primary

	round_type		"AMMO_M21_762HPBT"
	clipsize		20
	startrounds		200
	error_hip	1.5 
	error_up  	.02 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_762HPBT	1
	launchuserpoint bullet

	flags Scoped
	scope_max_zero 10 100 200
	scope_max_mag	8

	crosshair coma20mm.tga
	hudicon H_m21.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 7  0 6 0 1	H_round.tga	    

	animadm M21_1st

	gfx1 M21_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 M21_3RD
  	pos  -42 11 -162 0 0 0
	tpos -69 27 -147 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "fire"
		delayend				auto
		soundsetend			GS_M21
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M21MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			27
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_M21Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			90
		delayend			auto
		soundset			GF_M21_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_SNIPE	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset			GF_M21_ST
		delaystart			1
		delayend			1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset			GF_M21_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		27
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_M24"
	category 3
	rank     11
	statid 311


	charfilter sniper

	flags Sniper

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_M24
	loadout_menu_ttdesc WEAP_DESC_M24
	weapon_class	primary

	round_type		"AMMO_M24_762HPBT"
	clipsize		6
	startrounds		180
	error_hip	1.3  
	error_up  	.01 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_762HPBT	1
	launchuserpoint bullet

	flags Scoped
	scope_max_zero 10 100 200
	scope_max_mag	14

	crosshair coma20mm.tga
	hudicon H_m24.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 8  0 18 0 1	H_round.tga	    

	animadm M24_1st

	gfx1 M24_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 M24_3RD
  	pos  -18 -0 -162 0 0 0
	tpos -69 27 -147 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "fire"
		delayend				auto
		soundsetend			GS_M24
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M24MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delaystart			50
		delayend			auto
		soundset			GF_M24_REC
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_M24Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			90
		delayend			auto
		soundset			GF_M24_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_BOLTSNIPE		
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset			GF_M21_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset			GF_M21_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		50
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_W300" 
	category 3
	rank     12
	statid 312


	charfilter sniper

	flags Sniper

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_300MAG
	loadout_menu_ttdesc WEAP_DESC_300MAG
	weapon_class	primary

	round_type		"AMMO_WINCHESTER300_300MAG"
	clipsize		4
	startrounds		180
	error_hip	1.3 
	error_up  	.01 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_300MAG	1
	launchuserpoint bullet

	flags Scoped
	scope_max_zero 12 100 200
	scope_max_mag	18

	crosshair coma20mm.tga
	hudicon H_win300.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 8  0 20 0 1	H_round.tga	    

	animadm M24_1st

	gfx1 w300_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 w300_3RD
  	pos  -18 -0 -162 0 0 0
	tpos -69 27 -147 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "fire"
		delayend				auto
		soundsetend			GS_W300MAG
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M4MuzFlashFp
		particleuserpoint	mflash01
	end

	action "recoil"
		delaystart			50
		delayend			auto
		soundset			GF_M24_REC 
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_M4BCasingFP
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			90
		delayend			auto
		soundset			GF_M24_RL 
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_BOLTSNIPE	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset			GF_M21_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset			GF_M21_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		50
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_Barret"
	category 3
	rank     13
	statid 313


	charfilter sniper

	flags Sniper

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_BARRET
	loadout_menu_ttdesc WEAP_DESC_BARRET
	weapon_class	primary

	round_type		"AMMO_BARRET_50CAL"
	clipsize		10
	startrounds		100
	error_hip	1.6 
	error_up  	.01 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_50CAL	1
	launchuserpoint bullet
	

	flags Scoped
	scope_max_zero 10 100 200
	scope_max_mag	12

	crosshair coma20mm.tga
	hudicon H_barret.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 7  0 11 0 1	H_round.tga	    

	animadm M82_1st

	gfx1 M82_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 M82_3RD
  	pos  5 2 -169 0 0 0
	tpos -69 27 -147 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "fire"
		delayend				auto
		soundsetend			GS_BARRET
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M4MuzFlashFp
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			48
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_M4BCasingFP
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			90
		delayend			auto
		soundset			GF_BARRETT_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_SNIPE	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset			GF_M21_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset			GF_M21_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		48
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_M249SAW"	
	category 3
	rank     14
	statid 314


	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_SAW
	loadout_menu_ttdesc WEAP_DESC_SAW
	weapon_class	primary

	round_type		"AMMO_SAW_556MM"
	clipsize		200
	startrounds		600
	error_hip	1.0 
	error_up  	.5   
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_556MMSAW	1
	launchuserpoint bullet

	flags auto


	crosshair coma20mm.tga
	hudicon H_saw.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 7	H_round.tga	    

	animadm M249_1st

	gfx1 M249_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 M249_3RD
  	pos  20 -5 -209 0 0 0

	
	
	

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend			6 
		soundsetend			GS_SAW
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M249SawMF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			0
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_M249SawCas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			240
		delayend				auto
		soundset			GF_SAW_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_MG  
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
		soundset	GF_MG_ST
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
		soundset	GF_MG_SF
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_M60"	
	category 3
	rank     15
	statid 315


	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_M60
	loadout_menu_ttdesc WEAP_DESC_M60
	weapon_class	primary

	round_type		"AMMO_M60_762MM"
	clipsize		200
	startrounds		600
	error_hip	1.0 
	error_up  	.5   
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_762MMAUTO	1
	launchuserpoint bullet

	flags auto


	crosshair coma20mm.tga
	hudicon H_m60.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 7	H_round.tga	    

	animadm M249_1st

	gfx1 M60_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 M60_3RD
  	pos  20 -5 -209 0 0 0

	
	

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend			7
		soundsetend			GS_M60
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M60MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			0
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_M60Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			240
		delayend				auto
		soundset			GF_M60_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_MG 
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
		soundset	GF_MG_ST
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
		soundset	GF_MG_SF
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_MAG58"	
	category 3
	rank     16
	statid 316

	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_FNMAG
	loadout_menu_ttdesc WEAP_DESC_FNMAG
	weapon_class	primary

	round_type		"AMMO_FNMAG_762MM"
	clipsize		200
	startrounds		600
	error_hip	1.0 
	error_up  	.5   
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_762MMAUTO	1
	launchuserpoint bullet

	flags auto


	crosshair coma20mm.tga
	hudicon H_mag58.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 7	H_round.tga	    

	animadm M249_1st

	gfx1 M58_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 M58_3RD
  	pos  20 -5 -209 0 0 0

	
	

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend			6
		soundsetend			GS_MAG58
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M4MuzFlashFp
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			0
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_M4BCasingFP
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			240
		delayend				auto
		soundset			GF_MAG58_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_MG  
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
		soundset	GF_MG_ST
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
		soundset	GF_MG_SF
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_MP5"	
	category 3
	rank     17
	statid 317

	charfilter cqb

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_MP5
	loadout_menu_ttdesc WEAP_DESC_MP5
	weapon_class	primary

	round_type		"AMMO_MP5_9MM"
	clipsize		30
	startrounds		300
	error_hip	.8 
	error_up  	.1   
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_9MMSMG	1
	launchuserpoint bullet

	flags auto
	flags Sighted

	sights  MP5irnA.tga   133  4 889 768 blend
	sights  MP5irnB.tga   447  356 576 485 blend

	crosshair coma20mm.tga
	hudicon H_mp5.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 1	H_round.tga	    

	animadm Mp5_1st

	gfx1 Mp5_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 Mp5_3RD
  	pos  -12 18 -183 0 0 0
	tpos  -39 44 -164 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend			auto
		soundsetend			GS_MP5SUP
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_MP5MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			0
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_BrtaBCasing
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			60
		delayend				auto
		soundset			GF_MP5_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_MP5  
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
		soundset	GF_MP5_ST
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
		soundset	GF_MP5_SF
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end

weapon "WPN_G3AUTO"
	category 3
	rank     18
	statid 318
	flags teamsabre

	charfilter cqb
	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	1	

	loadout_menu_icon	G3.tga
	loadout_menu_textid	WEAP_SHORT_G3
	loadout_menu_ttdesc 	WEAP_DESC_G3
	weapon_class		primary

	round_type		"AMMO_M60_762MM"
	clipsize		20
	startrounds		300
	error_hip	.8	
	error_up  	.05  
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_556MM	1
	clipslot		1
	launchuserpoint bullet

	flags auto
	flags Sighted


	sights  g3iron.tga   112  0 889 768 blend
	
	

	crosshair coma20mm.tga
	hudicon H_g3a.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 7  0 6 0 1	H_round.tga	    

	animadm G3_1st

	gfx1 G3_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 G3_3rd
  	pos   -26.49, 31.52, -167.25 7.000, 3.500, 358.750
	tpos  -34.89, 46.29, -156.46 5.750, 3.750, 0.250
	action "idle"
		delayend				auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend				auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend			8	
		soundsetend			GS_HKG3A
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_CAR15MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			2
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_CAR15Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			100
		delayend			auto
		soundset			GF_HKG3A_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_OICW	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_HKG3A_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_HKG3A_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end

weapon "WPN_G3"
	category 3
	rank     19
	statid 	 319
	flags teamsabre

	charfilter cqb
	charfilter gunner

	round_type		"AMMO_M60_762MM"
	clipsize		20
	startrounds		0
	error_hip	.8 
	error_up  	.05 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_556MM	1
	clipslot		1
	launchuserpoint bullet

	flags Sighted
	flags Primary

	sights  g3iron.tga   112  0 889 768 blend
	
	

	crosshair coma20mm.tga
	hudicon H_g3s.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 7  0 6 0 1	H_round.tga	    		

	animadm G3_1st

	gfx1 G3_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 G3_3rd
  	pos   -26.49, 31.52, -167.25 7.000, 3.500, 358.750
	tpos  -34.89, 46.29, -156.46 5.750, 3.750, 0.250

	action "idle"
		delayend		  auto
		anim		  anim_wpn_idle
		function      wpn_std_idle
	end	

	action "emptyidle"
		delayend		  auto
		anim		  anim_wpn_idle
		function      wpn_std_idle
	end	

	action "fire"
		delayend			8	
		soundsetend			GS_HKG3A
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_CAR15MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			2
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_CAR15Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			100
		delayend			auto
		soundset			GF_HKG3A_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_OICW	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset			GF_HKG3A_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset				GF_HKG3A_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end




weapon "WPN_G36AUTO"
	category 3
	rank     20
	statid 320
	flags teamsabre

	charfilter cqb
	charfilter gunner
	charfilter medic

	loadout_selectable	1	
	loadout_subclasses	1	

	loadout_menu_icon	G36.tga
	loadout_menu_textid	WEAP_SHORT_G36
	loadout_menu_ttdesc WEAP_DESC_G36
	weapon_class	primary

	round_type		"AMMO_CAR15_556MM"
	clipsize		30
	startrounds		300
	error_hip	.8	
	error_up  	.05  
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  120				
	ammoclass		CLASS_556MM	1
	clipslot		1
	launchuserpoint bullet

	flags auto
	flags Sighted

	sights  g36aim.tga   112  0 889 768 blend
	sights  g36gls.tga   112  0 896 774 multiplyat
	sights  reddot1.tga    496  368 527 399 add		scale

	crosshair coma20mm.tga
	hudicon H_g36a.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 1	H_round.tga	    

	animadm g36_1st

	gfx1 g36_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 G36_3rd
  	pos  -21.75, 32.99, -168.75 2.250, 3.000, 359.500
	tpos -37.25, 45.74, -150.25 0.250, 359.750, 0.250

	action "idle"
		delayend				auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend				auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	


	action "fire"
		delayend				auto
		soundsetend			GS_HKG36
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_CAR15MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			2
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_CAR15Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			100
		delayend			auto
		soundset			GF_HKG36_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_OICW	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_HKG36_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_HKG36_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end

weapon "WPN_G36"
	category 3
	rank     21
	statid 	 321
	flags teamsabre

	charfilter cqb
	charfilter medic
	charfilter gunner

	round_type		"AMMO_CAR15_556MM"
	clipsize		30
	startrounds		0
	error_hip	.8 
	error_up  	.05 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_556MM	1
	clipslot		1
	launchuserpoint bullet

	flags Sighted
	flags Primary

	sights  g36aim.tga   112  0 889 768 blend
	sights  g36gls.tga   112  0 896 774 multiplyat
	sights  reddot1.tga    496  368 527 399 add		scale

	crosshair coma20mm.tga
	hudicon H_g36s.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 4  0 4 0 1	H_round.tga	    

	animadm g36_1st

	gfx1 g36_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 G36_3rd
  	pos  -21.75, 32.99, -168.75 2.250, 3.000, 359.500
	tpos -37.25, 45.74, -150.25 0.250, 359.750, 0.250


	action "idle"
		delayend		  auto
		anim		  anim_wpn_idle
		function      wpn_std_idle
	end	

	action "emptyidle"
		delayend		  auto
		anim		  anim_wpn_idle
		function      wpn_std_idle
	end	

	action "fire"
		delayend				auto
		soundsetend			GS_HKG36
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_CAR15MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			2
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_CAR15Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			100
		delayend			auto
		soundset			GF_HKG36_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_OICW	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset			GF_HKG36_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset				GF_HKG36_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end





weapon "WPN_PSG1"
	category 3
	rank     22
	statid 322
	flags teamsabre


	charfilter sniper

	flags Sniper

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	PSG1.tga
	loadout_menu_textid	WEAP_SHORT_PSG1
	loadout_menu_ttdesc WEAP_DESC_PSG1
	weapon_class	primary

	round_type		"AMMO_M21_762HPBT"
	clipsize		20
	startrounds		200
	error_hip	1.5 
	error_up  	.02 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_762HPBT	1
	launchuserpoint bullet

	flags Scoped
	scope_max_zero 10 100 200
	scope_max_mag	8

	crosshair coma20mm.tga
	hudicon H_PSG1a.tga
	hudclipgfx 	 0  0		H_clip.tga			
	hudrndgfx	 7  0 6 0 1	H_round.tga	    

	animadm psg1_1st

	gfx1 psg1_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 PSG1_3rd
  	pos  -36.00, 29.53, -170.52 4.250, 3.000, 0.250
	tpos -32.54, 47.06, -148.27 0.500, 352.000, 0.500

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "fire"
		delayend			1
		soundsetend			GS_PSG1
		anim				anim_wpn_fire
		function			wpn_std_fire
		particle			Effect_M21MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delaystart			1
		delayend			35		
		anim				anim_wpn_recoil
		function			wpn_std_recoil
		particle			Effect_M21Cas
		particleuserpoint	bcasing
	end

	action "reload"
		delaystart			90
		delayend			auto
		soundset			GF_PSG1_RL
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		delayend				auto
		soundset			DRY_SNIPE	
		anim				anim_wpn_empty
		function			wpn_std_empty
	end

	action "switchto"
		soundset			GF_PSG1_ST
		delaystart			1
		delayend			1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset			GF_PSG1_SF
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		27
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end









weapon "WPN_GRENADEFB" 
	category 4
	rank     0
	statid 400

	charfilter cqb
	charfilter medic
	charfilter sniper
	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_GRENADE_FLASH
	weapon_class	grenade

	flags	NoClipsNoDraw
	flags	Underwater
	flags	OkWhileJumping

	round_type		"GRENADEFB"
	clipsize		1
	startrounds		5
	classrounds		medic 2
	classrounds		sniper 1
	classrounds		gunner 2
	error_hip	0 
	error_up  	0 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_GRENADEFB	1

	attack_anim	 2		
	special_hold 1		

	launchuserpoint bullet

	crosshair coma20mm.tga
	hudicon H_flash.tga
	
	animadm Flsh_1st

	gfx1 Flsh_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 Flsh_3RD
  	pos  -33 8 -177 0 0 0

	action "idle"
		delayend		  auto
		anim		  anim_wpn_idle
		function      wpn_std_idle
	end	

	action "emptyidle"
		delaystart			auto
		anim				anim_wpn_empty_idle
		function			wpn_std_emptyidle
	end	

	action "fire"
		delaystart			70

		delayend			auto
		soundset			GF_CNADE_THROW
		
		anim				anim_wpn_fire
		function			wpn_std_fire
	end

	action "recoil"
		delayend				auto
		anim				anim_wpn_recoil
		function			wpn_std_recoil
	end

	action "reload"
		delayend				auto
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		soundset		DRY_CLAYSATCH
		delayend				auto  
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_GNADE_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_GNADE_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end

weapon "WPN_GRENADEHE"
	category 5
	rank     0
	statid 401

	charfilter cqb
	charfilter medic
	charfilter sniper
	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_GRENADE_FRAG
	weapon_class	grenade

	flags	NoClipsNoDraw
	flags	Underwater
	flags	OkWhileJumping

	round_type		"GRENADEHE"
	clipsize		1
	startrounds		5
	classrounds		medic 2
	classrounds		sniper 2
	classrounds		gunner 3
	error_hip	0 
	error_up  	0 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_GRENADEHE	1

	crosshair coma20mm.tga
	hudicon H_frag.tga
	

	launchuserpoint bullet

	attack_anim	 2		
	special_hold 1		

	animadm frag_1st

	gfx1 Frag_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 Frag_3RD
  	pos  -33 8 -177 0 0 0

	action "idle"
		delayend		  auto
		anim		  anim_wpn_idle
		function      wpn_std_idle
	end	

	action "emptyidle"
		delaystart			auto
		anim				anim_wpn_empty_idle
		function			wpn_std_emptyidle
	end	

	action "fire"
		delaystart			80
		delayend			auto
		soundset			GF_GNADE_THROW
		anim				anim_wpn_fire
		function			wpn_std_fire
	end

	action "recoil"
		delayend				auto
		anim				anim_wpn_recoil
		function			wpn_std_recoil
	end

	action "reload"
		delayend				auto
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		soundset		DRY_CLAYSATCH
		delayend				auto 
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_GNADE_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_GNADE_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end

weapon "WPN_GRENADESM" 
	category 6
	rank     0
	statid 402

	charfilter cqb
	charfilter medic

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_GRENADE_SMOKE
	weapon_class	grenade

	flags	NoClipsNoDraw
	flags	Underwater
	flags	OkWhileJumping

	round_type		"GRENADESM"
	clipsize		1
	startrounds		3
	error_hip	0 
	error_up  	0 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	ammoclass		CLASS_GRENADESM	1

	launchuserpoint bullet

	attack_anim	 2		
	special_hold 1		

	crosshair coma20mm.tga
	hudicon H_smoke.tga
	
	animadm smok_1st

	gfx1 smok_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 smok_3RD
  	pos  -33 8 -177 0 0 0

	action "idle"
		delayend		  auto
		anim		  anim_wpn_idle
		function      wpn_std_idle
	end	

	action "emptyidle"
		delaystart			auto
		anim				anim_wpn_empty_idle
		function			wpn_std_emptyidle
	end	

	action "fire"
		delayend				auto
		delaystart				65
		soundset			GF_CNADE_THROW
		anim				anim_wpn_fire
		function			wpn_std_fire
	end

	action "recoil"
		delayend				auto
		anim				anim_wpn_recoil
		function			wpn_std_recoil
	end

	action "reload"
		delayend				auto
		anim				anim_wpn_reload
		function			wpn_std_reload
	end

	action "empty"
		soundset		DRY_CLAYSATCH
		delayend				auto 
		function			wpn_std_empty
	end

	action "switchto"
		soundset		GF_GNADE_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchto
		function			wpn_std_switchto
	end

	action "switchfrom"
		soundset		GF_GNADE_ST
		delaystart		1
		delayend		1
		anim				anim_wpn_switchfrom
		function			wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim				anim_wpn_switchrank
		function			wpn_std_switchrank
	end
end


weapon "WPN_MEDPACK"
	category 9
	rank     0
	statid 700

	charfilter medic

	round_type  "medpack"
	clipsize    -1
	startrounds -1
	error_hip	0 
	error_up  	0 
	targetpitchmax  85				
	targetpitchmin  85				
	targetyawrange  120				
	launchuserpoint bullet
	run_anim 1

	flags	Underwater
	crosshair coma20mm.tga
	hudicon H_medpak.tga

	animadm medp_1st

	gfx1 medp_1st
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 medp_3rd 
	pos  4 -5 -186 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "fire"
		delayend		  auto
		soundsetend	  MEDPAK_USE
		anim		  anim_wpn_fire
		function      wpn_std_fire
	end

	action "recoil"
		delayend		  auto
		anim		  anim_wpn_recoil
		function      wpn_std_recoil
	end

	action "reload"
		delayend		  auto
		anim		  anim_wpn_reload
		function      wpn_std_reload
	end

	action "empty"
		soundset	DRY_CLAYSATCH
		delayend		  auto
		anim		  anim_wpn_empty
		function      wpn_std_empty
	end

	action "switchto"
		soundset	GF_SATCHEL_ST
		delaystart		1
		delayend		1
		anim		  anim_wpn_switchto
		function      wpn_std_switchto
	end

	action "switchfrom"
		soundset	GF_SATCHEL_SF
		delaystart		1
		delayend		1
		anim		  anim_wpn_switchfrom
		function      wpn_std_switchfrom
	end

	action "switchrank"
		delaystart		1
		delayend		1
		anim		  anim_wpn_switchrank
		function      wpn_std_switchrank
	end
end


weapon "WPN_SATCHEL_CHARGE"
	category 7
	rank     0
	statid 500

	charfilter cqb

	loadout_selectable	1	
	loadout_subclasses	1	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_SATCHEL
	loadout_menu_ttdesc WEAP_DESC_SATCHEL
	weapon_class	accessory

	round_type  "satchel"
	clipsize    1
	startrounds 2
	error_hip	0 
	error_up  	0 
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  15				

	animadm stch_1st

	flags	NoClipsNoDraw
	flags	Underwater
	flags	OkWhileJumping

	hudicon h_satchl.tga

	gfx1 stch_1st  
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 stch_3rd 
	pos  16 -34 -205 0 0 0

	ammoclass	CLASS_SATCHEL 1

	action "idle"
		delayend		  auto
		anim		  anim_wpn_idle
		function      wpn_std_idle
	end	

	action "emptyidle"
		delaystart			auto
		anim				anim_wpn_empty_idle
		function			wpn_std_emptyidle
	end	

	action "fire"
		soundsetend	  MEDPAK_USE
		delaystart		30
		delayend         auto
		anim		  anim_wpn_fire
		function      wpn_std_fire
	end

	action "recoil"
		delayend      auto			
		anim		  anim_wpn_recoil
		function      wpn_std_recoil
	end

	action "reload"
		delaystart         auto
		anim		  anim_wpn_reload
		function      wpn_std_reload
	end

	action "empty"
		soundset	DRY_CLAYSATCH 
		delaystart         auto
		function      wpn_std_empty
	end

	action "switchto"
		soundset	GF_SATCHEL_ST
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		soundset	GF_SATCHEL_SF
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end


weapon "WPN_SATCHEL_DETONATOR"
	category 8
	rank     0
	statid 600

	charfilter cqb

	round_type  "detonator"
	clipsize    -1
	startrounds -1
	error_hip	0 
	error_up  	0 
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  15				
	run_anim 1

	launchuserpoint bullet

	animadm det_1st
	flags	Underwater
	flags	OkWhileJumping

	hudicon h_deton.tga

	gfx1 det_1st  
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 det_3rd 
	pos  13 -7 -205 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "fire"
		soundsetend	CLICK_SATCHEL	
		delaystart		30
		delayend      auto
		anim		  anim_wpn_fire
		function      wpn_std_fire
	end

	action "recoil"
		delayend      auto			
		anim		  anim_wpn_recoil
		function      wpn_std_recoil
	end

	action "reload"
		delayend         auto
		anim		  anim_wpn_reload
		function      wpn_std_reload
	end

	action "empty"
		soundset	DRY_CLAYSATCH  
		delayend         auto
		function      wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end

weapon "WPN_CLAYMORE"
	category 7
	rank     1
	statid 501

	charfilter cqb
	charfilter sniper

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_CLAYMORE
	loadout_menu_ttdesc WEAP_DESC_CLAYMORE
	weapon_class	accessory

	round_type  "claymore"
	clipsize    1
	startrounds 2
	error_hip	0 
	error_up  	0 
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  15				

	animadm stch_1st

	flags	NoClipsNoDraw
	flags	OkWhileJumping

	hudicon h_clymor.tga

	gfx1 clym_1st  
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 clym_3rd 
	pos  16 -34 -205 0 0 0

	ammoclass	CLASS_CLAYMORE 1

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delaystart			auto
		anim				anim_wpn_empty_idle
		function			wpn_std_emptyidle
	end	

	action "fire"
		delaystart		30
		delayend      auto
		anim		  anim_wpn_fire
		function      wpn_std_fire
	end

	action "recoil"
		delayend      auto		
		anim		  anim_wpn_recoil
		function      wpn_std_recoil
	end

	action "reload"
		delayend         auto
		anim		  anim_wpn_reload
		function      wpn_std_reload
	end

	action "empty"
		soundset	DRY_CLAYSATCH
		delayend      auto
		function      wpn_std_empty
	end

	action "switchto"
		soundset	GF_SATCHEL_ST
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		soundset	GF_SATCHEL_SF
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end


weapon "WPN_AT4"
	category 7
	rank     2
	statid 502

	charfilter gunner

	loadout_selectable	1	
	loadout_subclasses	0	

	loadout_menu_icon	tbd.tga
	loadout_menu_textid	WEAP_SHORT_AT4
	loadout_menu_ttdesc WEAP_DESC_AT4
	weapon_class	accessory

	round_type  "ROCKETAT4"
	clipsize    1
	startrounds 1
	error_hip	0 
	error_up  	0 
	targetpitchmax  22				
	targetpitchmin  50				
	targetyawrange  15				

	launchuserpoint bullet

	ammoclass	CLASS_AT4	1

	flags Sighted

	sights  At4irnA.tga   373  134 1024 782 blend
	sights  At4irnB.tga   447  356 576 485 blend

	animadm at4_1st
	crosshair coma20mm.tga

	hudicon h_at4.tga

	gfx1 at4_1st   
	gfx1a arms
	gfx1b armsb
	gfx1_sa armsc
	gfx1_sb armscb
	gfx3 at4_3rd 
	pos  -7 -13 -200 0 0 0
	tpos  -37 3 -192 0 0 0

	action "idle"
		delayend			auto
		anim				anim_wpn_idle
		function			wpn_std_idle
	end	

	action "emptyidle"
		delaystart			auto
		anim				anim_wpn_empty_idle
		function			wpn_std_emptyidle
	end	

	action "fire"
		delaystart		1
		delayend      auto
		soundsetend	GS_AT4
		anim		  anim_wpn_fire
		function      wpn_std_fire
		particle			Effect_AT4MF
		particleuserpoint	mflash01
	end

	action "recoil"
		delaystart		auto
		anim		  anim_wpn_recoil
		function      wpn_std_recoil
	end

	action "reload"
		delaystart    auto
		anim		  anim_wpn_reload
		function      wpn_std_reload
	end

	action "empty"
		delaystart		auto
		soundset	DRY_AT4
		function      wpn_std_empty
	end

	action "switchto"
		soundset	GF_AT4_ST
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		soundset	GF_AT4_SF
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end




weapon "WPN_EMPLCD50"
	category 10
	rank     3
	statid 903

	round_type  "50cal"
	clipsize    -1
	startrounds 500
	error_hip	.7 
	error_up  	.7 
	targetpitchmax  15				
	targetpitchmin  45				
	targetyawrange  180				

	launchuserpoint camera 
	gfx1 b50b_1st
	gfx3 EM50cal

	attachtextid attach_50cal

	animadm b50_1st

	crosshair 50cal.tga
	hudicon h_50cal.tga

	flags auto
	flags Emplaced

	pos  -66 0 -157 0 0 0

	
	

	action "idle"
		function      wpn_std_idle
		anim		  anim_wpn_idle
	end	

	action "fire"
		anim				anim_wpn_fire
		soundsetend			GS_50CALN6
		delayend			auto 
		function			wpn_std_fire
		particle			Effect_MiniMuz
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			1
		soundsetend			GF_MGUN_CASING
		function			wpn_std_recoil
		particle			Effect_50Calcasing
		particleuserpoint	bcasing
	end

	action "reload"
		delayend         0
		function      wpn_std_reload
	end

	action "empty"
		soundset		DRY_MG  
		delayend         0
		function      wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end

weapon "WPN_EMPLCDMINI"
	category 10
	rank     4
	statid 904

	round_type  "minirnds"
	clipsize    -1
	startrounds 500
	error_hip	1.0 
	error_up  	1.0 
	targetpitchmax  75				
	targetpitchmin  12				
	targetyawrange  75				

	launchuserpoint camera 
	gfx3 minigun

	attachtextid attach_minigun

	crosshair 50cal.tga
	hudicon h_minign.tga

	flags auto
	flags Emplaced

	pos  -6 -14 -205 0 0 0

	soundhead GS_MINIHEAD
	soundfireloop LP_GS_MINIGUN
	soundtrailoff GS_MINITAIL


	action "idle"
		function      wpn_std_idle
		anim		  anim_wpn_idle
	end	

	action "fire"
		soundsetend   GF_MGUN_CASING
		delaystart    0
		delayend	  0
		function      wpn_std_fire
		particle	  Effect_MiniMuz
		particleuserpoint	mflash01
	end

	action "recoil"
		delaystart    0
		delayend	  7
		function      wpn_std_recoil
		particle	  Effect_50Calcasing
		particleuserpoint	bcasing
	end

	action "reload"
		delayend         0
		function      wpn_std_reload
	end

	action "empty"
		soundset		DRY_MINI  
		delayend         0
		function      wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end

weapon "WPN_EMPLCDGRND"
	category 10
	rank     5
	statid 905

	round_type  "MK19nade"
	clipsize    -1
	startrounds -1
	error_hip	1.0 
	error_up  	1.0 
	targetpitchmax  45				
	targetpitchmin  45				
	targetyawrange  135				

	launchuserpoint camera 
	gfx3 MK19
	crosshair coma20mm.tga
	hudicon h_mk19.tga

	attachtextid attach_mk19

	flags auto
	flags Emplaced

	pos  -6 -14 -205 0 0 0

	
	

	action "idle"
		function      wpn_std_idle
		anim		  anim_wpn_idle
	end	

	action "fire"
		soundsetend			GS_EMP_GLAUNCH
		delayend			1
		function			wpn_std_fire
		particle			Effect_MK19Muz
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			30
		function			wpn_std_recoil
		particle			Effect_Grencasing
		particleuserpoint	bcasing
	end

	action "reload"
		delayend			300
		function			wpn_std_reload
	end

	action "empty"
		soundset		DRY_AT4 
		delayend			0
		function			wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end

weapon "WPN_EMPLMORTOR"
	category 10
	rank     6
	statid 906

	round_type  "mortor"
	clipsize    -1
	startrounds -1
	error_hip	3 
	error_up  	3 
	targetpitchmax  50				
	targetpitchmin  10				
	targetyawrange  120				

	launchuserpoint camera 
	gfx3 Mortar
	crosshair coma20mm.tga

	attachtextid attach_mortor

	flags auto
	flags Emplaced

	pos  -6 -14 -205 0 0 0

	
	

	action "idle"
		function      wpn_std_idle
		anim		  anim_wpn_idle
	end	

	action "fire"
		
		delayend         60
		function      wpn_std_fire
	end

	action "recoil"
		delayend         2
		function      wpn_std_recoil
	end

	action "reload"
		delayend         0
		function      wpn_std_reload
	end

	action "empty"
		delayend         0
		function      wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end

weapon "WPN_EMP50ETEK"   
	category 10
	rank     7
	statid 907

	round_type  "50cal"
	clipsize    -1
	startrounds 500
	error_hip	1.4  
	error_up  	0.7  
	targetpitchmax  45				
	targetpitchmin  45				
	targetyawrange  180				

	launchuserpoint camera 

	animadm b50_1st
	gfx1 b50_1st
	gfx3 E50ETEK

	attachtextid attach_50cal

	crosshair 50cal.tga
	hudicon h_50cal.tga

	flags auto
	flags Emplaced

	pos  -58 0 -161 0 0 0


	
	

	action "idle"
		function      wpn_std_idle
		anim		  anim_wpn_idle
	end	

	action "fire"
		soundsetend			GS_50CALN6
		delayend			auto 
		anim				anim_wpn_fire
		particle			Effect_MiniMuz
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			1
		function			wpn_std_recoil
		particle			Effect_50Calcasing
		particleuserpoint	bcasing
	end

	action "reload"
		delayend         0
		function		wpn_std_reload
	end

	action "empty"
		soundset		DRY_MG  
		delayend         0
		function      wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end

weapon "WPN_EMP50TRI"
	category 10
	rank     8
	statid 908

	round_type  "50cal"
	clipsize    -1
	startrounds 500
	error_hip	.7 
	error_up  	.7 
	targetpitchmax  45				
	targetpitchmin  45				
	targetyawrange  180				

	launchuserpoint camera 

	animadm b50_1st
	gfx1 b50_1st
	gfx3 E50tripd
	crosshair 50cal.tga

	attachtextid attach_50cal
	hudicon h_50cal.tga

	flags auto
	flags Emplaced

	pos  -58 0 -161 0 0 0


	
	

	action "idle"
		function      wpn_std_idle
		anim		  anim_wpn_idle
	end	

	action "fire"
		anim				anim_wpn_fire
		soundsetend			GS_50CALN6
		delayend			auto 
		function			wpn_std_fire
		particle			Effect_MiniMuz
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			1
		function			wpn_std_recoil
		particle			Effect_50Calcasing
		particleuserpoint	bcasing
	end

	action "reload"
		delayend         0
		function      wpn_std_reload
	end

	action "empty"
		soundset		DRY_MG  
		delayend         0
		function      wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end


weapon "WPN_EMcannon"
	category 10
	rank     9
	statid 909

	round_type  "Rclsrnd"
	clipsize    -1
	startrounds 500
	error_hip	1.4 
	error_up  	1.4 
	targetpitchmax  45				
	targetpitchmin  45				
	targetyawrange  180				

	launchuserpoint camera 

	gfx3 EMcannon

	crosshair 50cal.tga
	hudicon h_minigun.tga

	attachtextid attach_emcannon

	flags auto
	flags Emplaced

	pos  -16 0 -155 0 0 0

	action "idle"
		function      wpn_std_idle
		anim		  anim_wpn_idle
	end	

	action "fire"
		anim				anim_wpn_fire
		soundsetend			GS_EMCANNON
		delayend			auto 
		function			wpn_std_fire
		particle			Effect_MiniMuz
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			120
		function			wpn_std_recoil
		particle			Effect_50Calcasing
		particleuserpoint	bcasing
	end

	action "reload"
		delayend         0
		function		wpn_std_reload
	end

	action "empty"
		soundset		DRY_MG  
		delayend         0
		function		wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		function		wpn_std_switchto
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end


weapon "WPN_UG50cal"
	category 10
	rank     10
	statid 910

	round_type  "50cal"
	clipsize    -1
	startrounds 500
	error_hip	.7 
	error_up  	.7 
	targetpitchmax  45				
	targetpitchmin  45				
	targetyawrange  180				

	launchuserpoint camera 
	
	gfx1 b50_1st
	gfx3 UG50cal
	animadm b50_1st
	crosshair 50cal.tga

	attachtextid attach_50cal
	hudicon h_50cal.tga

	flags auto
	flags Emplaced

	pos  -58 0 -161 0 0 0


	
	

	action "idle"
		function      wpn_std_idle
		anim		  anim_wpn_idle
	end	

	action "fire"
		anim				anim_wpn_fire
		soundsetend			GS_50CALN6
		delayend			auto 
		function			wpn_std_fire
		particle			Effect_MiniMuz
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			1
		function			wpn_std_recoil
		particle			Effect_50Calcasing
		particleuserpoint	bcasing
	end

	action "reload"
		delayend         0
		function      wpn_std_reload
	end

	action "empty"
		soundset		DRY_MG  
		delayend         0
		function      wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end

weapon "WPN_EMPLCD50NA"			
	category 10
	rank     11
	statid 911

	round_type  "50cal"
	clipsize    -1
	startrounds 500
	error_hip	.7 
	error_up  	.7 
	targetpitchmax  15				
	targetpitchmin  45				
	targetyawrange  180				

	launchuserpoint camera 
	gfx1 b50_1st
	gfx3 H50cal

	attachtextid attach_50cal
	animadm b50_1st

	crosshair 50cal.tga
	hudicon h_50cal.tga

	flags auto
	flags Emplaced

	pos  -66 0 -157 0 0 0

	
	

	action "idle"
		function      wpn_std_idle
		anim		  anim_wpn_idle
	end	

	action "fire"
		anim				anim_wpn_fire
		soundsetend			GS_50CALN6
		delayend			auto 
		function			wpn_std_fire
		particle			Effect_MiniMuz
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			1
		soundsetend			GF_MGUN_CASING
		function			wpn_std_recoil
		particle			Effect_50Calcasing
		particleuserpoint	bcasing
	end

	action "reload"
		delayend         0
		function      wpn_std_reload
	end

	action "empty"
		soundset		DRY_MG  
		delayend         0
		function      wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end

weapon "WPN_EMP50TRI180"
	category 10
	rank     12
	statid 912

	round_type  "50cal"
	clipsize    -1
	startrounds 500
	error_hip	.7 
	error_up  	.7 
	targetpitchmax  45				
	targetpitchmin  45				
	targetyawrange  90				

	launchuserpoint camera 

	animadm b50_1st
	gfx1 b50_1st
	gfx3 E50tripd
	crosshair 50cal.tga

	attachtextid attach_50cal
	hudicon h_50cal.tga

	flags auto
	flags Emplaced

	pos  -58 0 -161 0 0 0


	
	

	action "idle"
		function      wpn_std_idle
		anim		  anim_wpn_idle
	end	

	action "fire"
		anim				anim_wpn_fire
		soundsetend			GS_50CALN6
		delayend			auto 
		function			wpn_std_fire
		particle			Effect_MiniMuz
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			1
		function			wpn_std_recoil
		particle			Effect_50Calcasing
		particleuserpoint	bcasing
	end

	action "reload"
		delayend         0
		function      wpn_std_reload
	end

	action "empty"
		soundset		DRY_MG  
		delayend         0
		function      wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end


weapon "WPN_WEAKAIMINI"
	category 10
	rank     13
	statid 913

	round_type  "wkminirnds"
	clipsize    -1
	startrounds 500
	error_hip	1.0 
	error_up  	1.0 
	targetpitchmax  75				
	targetpitchmin  12				
	targetyawrange  75				

	launchuserpoint camera 
	gfx3 minigun

	attachtextid attach_minigun

	crosshair 50cal.tga
	hudicon h_minign.tga

	flags auto
	flags Emplaced

	pos  -6 -14 -205 0 0 0

	soundhead GS_MINIHEAD
	soundfireloop LP_GS_MINIGUN
	soundtrailoff GS_MINITAIL


	action "idle"
		function      wpn_std_idle
		anim		  anim_wpn_idle
	end	

	action "fire"
		soundsetend   GF_MGUN_CASING
		delaystart    0
		delayend	  0
		function      wpn_std_fire
		particle	  Effect_MiniMuz
		particleuserpoint	mflash01
	end

	action "recoil"
		delaystart    0
		delayend	  7
		function      wpn_std_recoil
		particle	  Effect_50Calcasing
		particleuserpoint	bcasing
	end

	action "reload"
		delayend         0
		function      wpn_std_reload
	end

	action "empty"
		soundset		DRY_MINI  
		delayend         0
		function      wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end


weapon "WPN_EMP50VBL"   
	category 10
	rank     14
	statid 914

	round_type  "50cal"
	clipsize    -1
	startrounds 500
	error_hip	1.4  
	error_up  	0.7  
	targetpitchmax  45				
	targetpitchmin  45				
	targetyawrange  180				

	launchuserpoint mflash01 

	animadm b50_1st
	gfx1 b50_1st
	gfx3 VBLtur

	attachtextid attach_50cal

	crosshair 50cal.tga
	hudicon h_50cal.tga

	flags auto
	flags Emplaced

	pos  -58 0 -161 0 0 0


	
	

	action "idle"
		function      wpn_std_idle
		anim		  anim_wpn_idle
	end	

	action "fire"
		soundsetend			GS_50CALN6
		delayend			auto 
		anim				anim_wpn_fire
		particle			Effect_MiniMuz
		particleuserpoint	mflash01
	end

	action "recoil"
		delayend			1
		function			wpn_std_recoil
		particle			Effect_50Calcasing
		particleuserpoint	bcasing
	end

	action "reload"
		delayend         0
		function		wpn_std_reload
	end

	action "empty"
		soundset		DRY_MG  
		delayend         0
		function      wpn_std_empty
	end

	action "switchto"
		delaystart		1
		delayend		1
		function      wpn_std_switchto
	end

	action "switchfrom"
		delaystart		1
		delayend		1
		function      wpn_std_switchfrom
	end
end


 `,
  "resources/game_strings/game.bin": `'[MENU]'
1024x768 = "1024x768";
1280x960 = "1280x960";
320x240 = "320x240";
400x300 = "400x300";
512x384 = "512x384";
640x480 = "640x480";
800x600 = "800x600";
ACCEPT = "&ACCEPT";
ACCEPT_MISSION = "&ACCEPT MISSION";
ACCEPT_SETTINGS = "&ACCEPT SETTINGS";
ACCEPT_SOLDIER = "&ACCEPT SOLDIER";
ACTIVATION_EXPLAIN = "NOTE: In voice activation mode PUSH-TO-TALK becomes PUSH-TO-MUTE";
ACTIVATION_MODE = "Activation Mode";
ACTIVATION_THRESHOLD = "Activation Threshold";
ADVANCED_SETUP = "Ad&vanced Setup";
ALLOW_ASSAULT = "Allow Assault Rifles";
ALLOW_AT4 = "Allow AT4";
ALLOW_CLAYMORE = "Allow Claymore Mines";
ALLOW_FRIENDLY_FIRE = "Allow Friendly Fire";
ALLOW_GRENADES = "Allow Grenades";
ALLOW_KNIFE = "Allow Knife";
ALLOW_MGS = "Allow Machine Guns";
ALLOW_MM1 = "Allow MM1 Grenade Launcher";
ALLOW_PANCOR = "Allow Pancor Jackhammer";
ALLOW_PISTOLS = "Allow Pistols";
ALLOW_SATCHEL = "Allow Satchel Charges";
ALLOW_SMGS = "Allow SMGs";
ALLOW_SNIPER = "Allow Sniper Rifles";
ALPHA_#1 = "ALPHA #1";
ALPHA_#2 = "ALPHA #2";
ANY = "Any";
APPS = "APPS";
ASSIGN_KEY = "ASSIGN &KEY";
ASSIGN_MOUSE = "ASSIGN &MOUSE";
ATTACK_AND_DEFEND = "ATTACK AND DEFEND";
ATTACK_AND_DEFEND_MP = "Attack and Defend";
AUDIO = "AUDIO";
AUDIO_OPTIONS = "Audio Options";
AUXILIARY_GEAR = "AUXILIARY:";
AVAILABLE_MAPS = "Available Maps";
BACK = "&Back";
BACKSPACE = "Backspace";
BACK_COLD = "BACK";
BASIC_SETUP = "Basic &Setup";
BIT = "Bit";
BLOOD_FX = "Blood FX";
BLUE = "Blue";
BUFFER_SIZE = "Color Depth";
CAMPAIGNS = "&CAMPAIGNS";
CAMPAIGN_#1 = "CAMPAIGN #&1";
CAMPAIGN_#2 = "CAMPAIGN #&2";
CAMPAIGN_KILLS = "Campaign Kills";
CAPS_LOCK = "CAPS LOCK";
CAPTURE_THE_FLAG = "CAPTURE THE FLAG";
CAPTURE_THE_FLAG_MP = "Capture the Flag";
CHANGE_DRIVER = "Change Driver...";
CHANGE_GEAR = "Change &Gear";
CHANGE_GEAR_COLD = "CHANGE GEAR";
CHANGE_GEAR_TITLE = "CHANGE GEAR";
CHANGE_MAGAZINE = "CHANGE MAGAZINE";
CHANGE_NAME = "Change &Name";
CHARACTER_ABILITIES = "Character Abilities";
CHARACTER_SELECT = "Character &Select";
CHARACTER_SELECT_TITLE = "CHARACTER SELECT";
CHARLIE_#1 = "CHARLIE #1";
CHARLIE_#2 = "CHARLIE #2";
CHAR_AQUATIC = "Mako";
CHAR_AQUATICS_NAME = "Erica Swift "Mako"";
CHAR_AQUATIC_BIO = "Mako 
Name: Chief Warrant Officer 2 Erica Swift
Specialty: Underwater Demolitions
Age: 25			
Height: 5'8"			
Weight: 125
Hair: Blonde			
Eyes: Green

Background:
Born to an American Embassy worker in the south of France, Erica's childhood was filled with adventure. By age ten, she was fluently speaking five different languages and meeting some of the most powerful European leaders. When she was fifteen, her father retired and moved the family to Southern California. Extremely intelligent and worldly, Erica quickly became bored with average teenage activities. Adrenaline sports such as big wave surfing, extreme mountain biking, and deep sea ship wreck diving became her passions. Upon graduation from college with a degree in chemistry, Erica put her intelligence to work at a major pharmaceutical company. During a diving vacation in the Caymans, Erica met a retired Navy Seal who inspired her with his tales of military adventure. Upon returning to the states, she immediately quit her job and joined the military.

During boot camp, Erica routinely requested additional training to see how far she could push herself and to impress her superiors. Being a female however, she was not eligible for the CDQC (Combat Diver Qualification Course). She did the next best thing by entering the EOD (Explosive Ordnance Disposal) training program at Indian Head, Maryland. After successfully completing the program with high honors, she was stationed at Ft. Shafter, Hawaii in the USARPAC EOD Control Team where she attained the rank of Chief Warrant 2. 

Her flawless service dedication and scuba background eventually caught the attention of Delta Force recruiters looking to fill their team with an underwater demolitions specialist. They brought Erica on board as a consultant and sent her to the CDQC. Her remarkable proficiency under pressure quickly got her a field position on one of the best five man squads. In her time off, she can be found surfing the world's biggest waves on the north shore of Hawaii.
";
CHAR_CQB = "Snakebite";
CHAR_CQB_BIO = "Snakebite
Name: Sergeant Jenn Tanaka
Specialty: CQB/Covert Ops
Age: 28			
Height: 5' 5"			
Weight: 115
Hair: Black			
Eyes: Brown
Birthplace: San Francisco, CA
Distinguishing Marks: Snake tattoo on right arm

Background:
As a child, Jennifer was extremely energetic and reckless. Her father ran a martial arts studio and began teaching her as soon as she could walk. She quickly picked up on advanced moves and was entering national tournaments by her teen years. However, Jenn also had a knack for getting herself into trouble. Her impatience with scholastic life lead to her openly rebelling against all authority figures except her father.  Her continual confrontations with teachers, principals and other kids lead her father to insist that upon graduation she join the army to learn respect for authority. 

Jenn scored high on her military entrance exams and was offered a wide selection of Military Occupational Specialties (MOS).  She chose Military Intelligence with a MOS of 97B, Counter-Intelligence Agent.  She attended basic training at the U.S. Army Intelligence Center, Ft. Huachuca, AZ. After graduating from training, she was assigned to the 501st Military Intelligence Brigade, Republic of South Korea.   Her unit's mission was to conduct reconnaissance, surveillance, interrogation of enemy prisoners and counter-intelligence.  Jenn excelled as a field agent, refining her deadly skills to a keen edge.   She quickly advanced to the rank of Sergeant. 

Delta Force recruiters took special notice of her achievements as they visited Korea for prospective candidates.   Upon accepting her, Delta Force added to Jenn's skills in stealth and martial arts by sending her through their intensive Close Quarters Battle training. Her quickness, stealth, and expert skill with all close range weapons impressed her instructors so much that she was assigned active duty on one of the best five-man squads.

It is rumored that she has never been observed entering or leaving the objective.  The only signs of her presence are the neutralized targets.";
CHAR_CQB_NAME = "Jenn Tanaka "Snakebite"";
CHAR_GRENADIER = "Gas Can";
CHAR_GRENADIER_BIO = "Gas Can 
Name: Sergeant Cole Harris
Specialty: Demolitions/Grenadier 
Age: 32
Height:  5'10"
Weight: 195 lbs.
Hair: Blonde, balding		
Eyes: Blue-gray
Birthplace: Tyler, Texas
Distinguishing Marks: Old 3rd degree burns on arms and chest, missing left index finger, tattoo of fiery devil on right arm, goatee no mustache 

Background:
With a southern drawl and a blue-collar worker mentality, this stocky soldier is one of the best field demolition experts in Special Forces. Before entering the military, Harris worked for a leading Texan fertilizer exporter. Experiments in his off-time lead to his intense interest in explosives. 

Harris began his military career undergoing OSUT (One-Station Unit Training) at Fort Leonardwood, Missouri.  There he exhibited a natural talent for indirect fire weapons, easily earning his grenadier expert badge after a rigorous battery of tests.  He was promoted to Private First Class after only 6 weeks of basic training.  After Phase One was complete, he moved on to the Advanced Training phase where he learned the fundamentals of combat engineering with emphasis on demolitions.  Harris finished at the top of the class, catching the eye of Delta Force recruiters.  After accepting their offer to undergo special operations training, he was immediately awarded the rank of Corporal and was ordered to Fort Benning for Airborne School.

After receiving his jump wings and sergeant's stripes, Gas Can received orders to undergo Advanced Demolitions Training (ADT) at the John F. Kennedy Special Warfare Center in Fort Bragg, North Carolina.  Here he expanded upon the fundamentals he had learned but with a focus on small unit tactics.  Gas Can finished in the top 3 percentile of his class and moved on to regular duty with Delta Force.

Some soldiers have a hard time dealing with Harris' excessively belligerent attitude, but no one ever disputes him on facts about explosives. With one look at a building, Harris can tell you twenty different ways of bringing it down. If he says he can have a specialized satchel pack armed and placed in fifteen minutes, you better get ready to set your clock at 14:59. ";
CHAR_GRENADIER_NAME = "Cole Harris "Gas Can"";
CHAR_GUNNER = "Pitbull";
CHAR_GUNNER_BIO = "Name:  First Lieutenant Rydel Wilson
Specialty: Heavy Gunner (Automatic Weapons)
Age: 31			
Height:  6' 5"			
Weight: 270 lbs.
Hair: Black (shaved)		
Eyes: Deep brown
Birthplace: Bronx, NY
Distinguishing Marks: Scar under lip, very muscular

Background:
Born in the Bronx, NY, Rydel is easily the toughest member of the Delta Force team. Rydel grew up with his mother and sisters in a one-bedroom apartment located above a boxing gym. It was there that he spent most of his time learning from local boxers and trainers. By the age of eighteen, Rydel was 6'4" and 290 pounds of pure muscle. He often could not find anyone who would agree to spar with him. At age nineteen, Rydel became a Golden Gloves Heavy Weight Contender. Even though Rydel had a future as a pro fighter, he felt that he could make more of a contribution to society by joining the military.

Rydel started his military career in the enlisted ranks, earning his E-6 (Staff Sergeant) stripes before the age of 28.  As a non-commissioned officer he found no equal both physically or with the rifle.  Rydel was a premier rifleman and took easily to the difficulties involved with firing squad automatic weapons.  He became so good, in fact, that he was asked to instruct for the Army Infantry Center in Fort Benning, Georgia.  He did this commendably for two years but longed to return to duty with a field unit.  He got his chance after he was prompted to apply to OCS (Officer's Candidate School).  After his commission, Rydel was transferred to active duty with 1st Battalion, 75th Ranger Regiment in Hunter Army Airfield, Georgia.  It was here that his professional dedication and esprit de corps shined.  He trained his men as rigorously as he drove himself.  It was this tenacity and single-minded drive that earned him his nickname, "Pitbull".  

His squad entered nearly every Regimental and Divisional competition, earning top honors in many of them.  It came as no surprise when Rydel was approached by Delta Force recruiters.  He quickly jumped at the chance to join the elite task force.  Due to his innate leadership skills he was the natural choice to become squad leader of the team. Rydel is still hard pressed to find anyone willing to spar with him.
";
CHAR_GUNNER_NAME = "Rydel Wilson "Pitbull"";
CHAR_SNIPER = "Longbow";
CHAR_SNIPER_BIO = "Longbow
Name: Sergeant Daniel Lonetree
Specialty: Sniper
Age: 25			
Height: 6'0"			
Weight: 180 lbs.
Hair: Black			
Eyes: Hazel
Birthplace: Tuba City, Arizona
Distinguishing Marks: Always sunburned on cheeks and nose, Navajo tribal tattoo

Background:
Having been abandoned by his mother and father as a child, Lonetree quickly learned to fend for himself. Although his grandparents were there to raise him, he grew distant from most other people. Larger kids often avoided starting fights with him due to the intense look he would get on his face. During his teen years he became fascinated with his grandfather, who was a code-talker during WWII. It became obvious that he wanted to follow in those footsteps and join the military straight out of high school.

He enlisted in the Army for Military Occupational Specialty (MOS) Infantry, 11B. During weapons qualification training, he displayed a natural ability for handling all types of weapons.  His particular expertise was shown during rifle qualification, where he scored a perfect 100% hit on all targets at all ranges.  After graduating Basic, Advanced Individual and Airborne Training at Ft. Benning, Georgia, Lonetree was assigned to Ft Bragg, NC with the 82nd Airborne Division.  Here he honed his field skills as an Airborne Infantryman, then quickly worked his way up from an infantry platoon to joining the elite, Long Range Reconnaissance Company.  Rising to the rank of Sergeant, he became keenly interested in joining Special Forces.  He applied and was accepted for the Special Forces Qualification Course at the John F. Kennedy Special Warfare Center, Ft. Bragg.  Here he was selected for training as a Special Forces Weapons Sergeant, MOS of 18B.

His dedication and finely tuned field skills led him to being selected as Distinguished Honor Graduate of his course.   He was assigned to a Special Forces Operational Detachment - Alpha (SFODA) in the 10th Special Forces Group, Ft Carson, CO. Due to his natural skills and expert marksmanship, he was selected for training at the Special Operations Target Interdiction Course (SOTIC), the sniper school for SF. He distinguished himself during Stabilization Force (SFOR) in Bosnia-Herzegovina conducting counter-sniper missions. Because of this, Delta Force recruiters took notice of his abilities and approached him about joining their ranks. 

Lonetree is determined and ready for almost any challenge. This professional sniper doesn't ever like to make small talk during missions. There is no more serious job than his. Even hard core soldiers are impressed at how stoic this sniper can be while under heavy fire. ";
CHAR_SNIPER_NAME = "Daniel Lonetree "Longbow"";
CHAR_SPECIALTY = "Specialty:";
CHECK_RECORDING_LEVEL = "Check Recording Level";
CHOOSE_A_SOLDIER = "CHOOSE CHARACTER";
CHOOSE_CHARACTER_TYPE = "Choose Character Type";
CHOOSE_LOADOUT = "Choose Loadout:";
CHOOSE_MOS = "Choose Specialty";
CHOOSE_SLOT = "Choose Slot:";
CHOOSE_SOLDIER = "C&HOOSE SOLDIER";
CHOOSE_WEAPON = "Choose Weapon:";
CLEAR_CHARACTER = "Clear Character";
COLOR_DEPTH = "Color Depth";
COMMANDERS_SCREEN = "COMMANDER'S SCREEN";
COMPLETED_MISSIONS = "Completed Missions";
CONNECTION = "CONNECTION";
CONNECTION_TYPE = "CONNECTION TYPE";
CONTROLS = "&Mouse";
COOPERATIVE = "COOPERATIVE";
COOPERATIVE_MP = "Cooperative";
COPYRIGHT = "  2000 NovaLogic, Inc.";
COUNTRY = "COUNTRY";
CREDITS = "&Credits";
CREDITS_TITLE = "CREDITS";
CROSSHAIR_SPREAD = "Crosshair Spread";
CS_DEFAULTNAME = "Mongoose";
CS_NONAME = "(Empty)";
CS_SUPERFUZZY = "Vendela";
CURRENT_CHAR = "Current Character:";
CURRENT_DRIVER = "Current 3D Driver:";
CURRENT_GEAR = "Current Gear:";
CYCLE = "Cycle";
DEATHMATCH = "DEATHMATCH";
DEATHMATCH_MP = "Death Match";
DEATH_MESSAGES = "Death Messages";
DEDICATED_SERVER = "Dedicated Server";
DEFAULT = "DEFAULT";
DEFAULT_COLD = "Default";
DEFAULT_GEAR = "&DEFAULT GEAR";
DELAYED_FRAGMENTATION = "Delayed Fragmentation";
DELAYED_FRAG_GRENADE = "Delayed Frag Grenade";
DELETE = "DELETE";
DELETE_KEY = "DELETE KEY";
DELETE_SOLDIER = "&DELETE SOLDIER";
DEMO_MISSION = "&DEMO MISSION";
DESIGNER_NOTES = "DESIGNER &NOTES";
DESTROYABLE_BUILDINGS = "Destroyable buildings";
DETAIL_HIGH = "High";
DETAIL_LOW = "Low";
DETAIL_MEDIUM = "Medium";
DETONATOR = "DETONATOR";
DIALOGUE_VOLUME = "Dialogue Volume";
DIFFICULTY_SETTINGS = "DIFFICULTY SETTINGS";
DISABLED = "Disabled";
DISPLAY_LAST_TALKER = "DISPLAY LAST TALKER";
DOWN = "DOWN";
DRIVER = "DRIVER";
DROP_ITEMS = "DROP ITEMS";
DROP_WEAPON = "Drop Weapons";
DROP_WEAPONS = "Drop Weapons";
DROP_WEAPONS_DISAPPEAR = "Dropped Weapons Disappear";
DUPLEX_MODE = "Duplex Mode";
EASY = "Easy";
EMPTY = "EMPTY";
EMPTY_SAVE_SLOT = "(Empty)";
ENABLED = "Enabled";
END = "END";
ENEMY_AI = "Enemy AI";
ENTER = "ENTER";
EREOF = "EREOF";
EXECUTE = "EXECUTE";
EXIT_GAME = "E&xit";
EXIT_GAME_COLD = "EXIT GAME";
EXIT_TO_MENUS = "Exit to Menus";
EXPLOSIVES = "EXPLOSIVE:";
EXSEL = "EXSEL";
F1 = "F1";
F10 = "F10";
F2 = "F2";
F3 = "F3";
F4 = "F4";
F5 = "F5";
F6 = "F6";
F7 = "F7";
F8 = "F8";
F9 = "F9";
FINAL = "FINAL";
FIRE_WEAPON = "FIRE WEAPON";
FLAGBALL_MP = "Flag Ball";
FLIP_MOUSE = "Flip Mouse";
FRAGMENTATION = "Fragmentation";
FRAG_GRENADE = "Frag Grenade";
FRIENDLY_FIRE_WARNING = "Friendly Fire Warning";
FRIENDLY_TAGS = "Friendly Tags";
FULL_(RECEIVE/SEND) = "Full (Receive/Send)";
FULL_SCREEN_(HARDWARE) = "Full Screen (Hardware)";
FULL_SCREEN_(SOFTWARE) = "Full Screen (Software)";
GAMEPLAY = "&Gameplay";
GAME_NAME = "GAME NAME";
GAME_PASSWORD = "GAME PASSWORD";
GAME_PREFERENCES = "GAME PREFERENCES";
GAME_TYPE = "Game Type";
GAME_WITH_NO_NAME = "Game With No Name";
GENERAL_SETTINGS = "AUDIO/VIDEO OPTIONS";
GOALS = "GOALS";
GO_PRONE = "GO PRONE";
GPS_ICONS = "GPS Icons";
GRENADE = "GRENADE";
GRENADES = "GRENADES:";
HALF_(RECEIVE_ONLY) = "Half (Receive Only)";
HANGUL = "HANGUL";
HARD = "Hard";
HELP = "HELP";
HIGH_DETAIL = "High Detail";
HOME = "HOME";
HOST = "&HOST";
HOSTING_GAME_TITLE = "HOSTING GAME";
HOST_A_GAME = "&HOST A GAME";
HOST_MULTIPLAYER = "&HOST MULTIPLAYER";
HOST_MULTIPLAYER_GAME = "&Host Multiplayer Game";
HOST_OPTIONS = "HOST &OPTIONS";
INCREASE_RECORD_VOLUME = "INCREASE RECORD VOLUME";
INCREASE_SCOPE_ZERO = "INCREASE SCOPE ZERO";
INFINITE = "Infinite";
INPUT = "INPUT";
INSERT = "INSERT";
JOIN = "&JOIN";
JOINING_GAME_TITLE = "JOINING GAME";
JOIN_A_GAME = "&JOIN A GAME";
JOIN_COLD = "JOIN";
JOIN_MULTIPLAYER = "&JOIN MULTIPLAYER";
JOIN_MULTIPLAYER_GAME = "&Join Multiplayer Game";
JUMP = "JUMP";
JUNJA = "JUNJA";
KANJI = "KANJI";
KEY = "KEY";
KEYPAD_* = "KEYPAD *";
KEYPAD_+ = "KEYPAD +";
KEYPAD_- = "KEYPAD -";
KEYPAD_. = "KEYPAD .";
KEYPAD_/ = "KEYPAD /";
KEYPAD_0 = "KEYPAD 0";
KEYPAD_1 = "KEYPAD 1";
KEYPAD_2 = "KEYPAD 2";
KEYPAD_3 = "KEYPAD 3";
KEYPAD_4 = "KEYPAD 4";
KEYPAD_5 = "KEYPAD 5";
KEYPAD_6 = "KEYPAD 6";
KEYPAD_7 = "KEYPAD 7";
KEYPAD_8 = "KEYPAD 8";
KEYPAD_9 = "KEYPAD 9";
KING_OF_THE_HILL = "KING OF THE HILL";
KING_OF_THE_HILL_MP = "King of the Hill";
KING_OF_THE_HILL_TIME = "King of the Hill Time";
KNIFE = "KNIFE";
LAN_/_IPX = "LAN / IPX";
LASER_DESIGNATOR = "LASER DESIGNATOR";
LEFT = "LEFT";
LEFT_MENU = "LEFT MENU";
LOOK_DOWN = "LOOK DOWN";
LOOK_UP = "LOOK UP";
LOW_DETAIL = "Low Detail";
MACRO_0 = "***I'm on offense!!!***";
MACRO_1 = "***I'm on defense!!!***";
MACRO_2 = "***Snipers take overwatch positions!!!***";
MACRO_3 = "***Guard the base!!!***";
MACRO_4 = "***I'm on point, cover me!!!****";
MACRO_5 = "***I'll cover you!!!***";
MACRO_6 = "***I've got the flag!!!***";
MACRO_7 = "***Help cover incomming flag!!!***";
MACRO_8 = "***Enemy sniper shooting at base***";
MACRO_9 = "***I need a medic***";
MAGAZINE = "Magazine";
MAIN_MENU = "MAIN MENU";
MAP_KEYBOARD = "&Keyboard";
MAXIMUM_PLAYERS = "Maximum Players";
MAXIMUM_RANK = "Maximum Rank";
MESSAGE_MACROS = "Me&ssage Macros";
METERS = "meters";
MINIMUM_RANK = "Minimum Rank";
MISSION_BRIEFING = "MISSION B&RIEFING";
MISSION_DATA = "Mission Data:";
MM_CAHELP = "Click to proceed to campaign selection.";
MM_CRHELP = "Click to view game credits.";
MM_CSHELP = "Click to proceed to the roster for reassignment.";
MM_DMHELP = "Click to play the demo mission.";
MM_MPHELP = "Click to proceed to a multiplayer game.";
MM_NWHELP = "Click to connect to the NovaWorld website via the in-game browser.";
MM_OPHELP = "Click to change game settings or customize player controls.";
MM_QMHELP = "Click to select a quick mission.";
MM_UPHELP = "Click to connect to NovaWorld to check for product updates for the Delta Force Land Warrior Demo.";
MODECHANGE = "MODECHANGE";
MODEM = "Modem";
MOS_AQUATIC = "Aquatic/Medic";
MOS_CQB = "Close Quarters Battle";
MOS_GRENADIER = "Grenadier";
MOS_GUNNER = "Gunner";
MOS_SNIPER = "Sniper";
MOUSE = "MOUSE";
MOUSE_SENSITIVITY = "Mouse Sensitivity";
MOVE_BACK = "MOVE BACK";
MOVE_FORWARD = "MOVE FORWARD";
MULTIPLAYER_DEATHS = "Multiplayer Deaths";
MULTIPLAYER_KILLS = "Multiplayer Kills";
MULTIPLAYER_OPTIONS = "&Multiplayer Options";
MULTIPLAYER_TEAM_GAMES_WON = "Multiplayer Team Games Won";
MULTI_PLAYER = "&Multiplayer";
MUSIC_VOLUME = "Music Volume";
MUTE_CURRENT_TALKER = "MUTE CURRENT TALKER";
N/A = "N/A";
NEW_OPERATIVE = "New Operative";
NEXT_FLAG_(MP) = "NEXT FLAG (MP)";
NEXT_WAYPOINT = "NEXT WAYPOINT";
NO = "No";
NON-DEDICATED_SERVER = "Non-Dedicated Server";
NONAME = "NONAME";
NONCONVERT = "NONCONVERT";
NONE = "None";
NONE_AVAILABLE = "None Available";
NORMAL = "Normal";
NOVAWORLD = "NovaWorld";
NOVAWORLD_LOBBY = "NOVAWORLD";
NO_AUX_1 = "(No Auxiliary 1)";
NO_AUX_2 = "(No Auxiliary 2)";
NO_GRENADE = "(No Grenade)";
NO_MAX_RANK = "No Maximum Rank";
NO_MIN_RANK = "No Minimum Rank";
NO_PRIMARY = "(No Primary)";
NO_SECONDARY = "(No Secondary)";
NO_SIDEARM = "(No Sidearm)";
NULL_MODEM = "NULL Modem";
NUMBER_OF_TEAMS = "NUMBER OF TEAMS";
NUM_LOCK = "NUM_LOCK";
OBJECT_DETAIL = "Object Detail";
OBJECT_TEXTURES = "Object Textures";
OEM_CLEAR = "OEM CLEAR";
OFF = "Off";
ON = "On";
OPERATIVE_NAME = "Operative Name";
OR = "OR";
ORDERS = "ORDERS";
OVERVIEW = "Overview:";
PA1 = "PA1";
PAGE_DOWN = "PAGE DOWN";
PAGE_UP = "PAGE UP";
PLAY = "PLAY";
PLAYER_CHOOSES = "Player Chooses";
PLAYER_HEALTH = "PLAYER HEALTH";
PLAYER_SETTINGS = "&Player Settings";
PLAYER_SETTINGS_TITLE = "PLAYER SETTINGS";
PLAYING_BACK_... = "PLAYING BACK ...";
PLAY_BRIEFING = "&PLAY BRIEFING";
PLAY_CREDITS = "Play Credits Now";
PLAY_DEMO = "PLAY &DEMO";
PLAY_MOVIE = "PLAY &MOVIE";
PLAY_ON_EXIT = "Play on exit";
PLAY_ON_NOVAWORLD = "Play on &Novaworld";
PLAY_TRAILER = "PLAY &TRAILER";
POWER_UPS = "POWER UPS";
PRESS_ESCAPE_TO_EXIT = "PRESS ESCAPE TO EXIT";
PREVIOUS_WAYPOINT = "PREVIOUS WAYPOINT";
PRIMARY_WEAPON = "PRIMARY:";
PRIMARY_WPN_FN_1 = "PRIMARY WPN FN 1";
PRIMARY_WPN_FN_2 = "PRIMARY WPN FN 2";
PRIMARY_WPN_FN_3 = "PRIMARY WPN FN 3";
PRIMARY_WPN_TOGGLE = "PRIMARY WEAPON MODE";
PRINT_SCREEN = "PRINT SCREEN";
PROCESS = "PROCESS";
PUSH_TO_TALK = "Push to Talk";
QUICK_MISSIONS = "&QUICK MISSIONS";
RANDOM = "Random";
RANGE = "Range";
RECENT_MESSAGES = "RECENT MESSAGES";
RECORDING = "RECORDING";
RECORDING_VOLUME = "Recording Volume";
RED = "Red";
REGISTER_HERE! = "&REGISTER HERE!";
REMAP_CLICK = "Click on the action you wish to remap.";
REMAP_DEFAULT = "Key mappings reset to defaults.";
REMAP_DELETED = "Mapping deleted.";
REMAP_OK = "The action has been remapped.";
REMAP_PRESS = "Press the key or mouse button you wish to map to this action.";
REMAP_RESERVED = "Sorry, the key you have entered is reserved. Remap canceled.";
REMAP_REVERT = "Reverted to old keymap settings.";
REMAP_SELECT = "Select the key mapping that you would like to delete.";
REPLAY = "Replay";
RESET_WAYPOINTS = "RESET &WAYPOINTS";
RESOLUTION = "Resolution";
RESPAWN_WITH_PRIMARY = "Respawn with Primary";
RESTRICT_RANK = "Restrict Rank";
RETURN_TO_MENU = "RETURN TO &MENU";
REVERT = "REVERT";
RIGHT = "RIGHT";
RIGHT_MENU = "RIGHT MENU";
ROUND = "round";
ROUNDS = "rounds";
SCOPE = "SCOPE";
SCOPE_DRIFT = "Scope Drift";
SCOPE_MAGNIFICATION = "SCOPE MAGNIFICATION";
SCOPE_SENSITIVITY = "Scope Sensitivity";
SCORE_LIMIT = "Score Limit";
SEARCH = "&SEARCH";
SEARCH_AND_DESTROY = "SEARCH AND DESTROY";
SEARCH_AND_DESTROY_MP = "Search and Destroy";
SECONDARY_USED_BY_PRIMARY = "(Slot taken by primary weapon)";
SECONDARY_WEAPON = "SECONDARY:";
SECONDARY_WPN_TOGGLE = "SECONDARY WEAPON MODE";
SEE_TEAM_ON_GPS = "See Team on GPS";
SELECT = "SELECT";
SELECTED_MISSION = "Selected Mission";
SELECT_CHARACTER = "Select Character:";
SELECT_LAST_TALKER = "SELECT LAST TALKER";
SELECT_QUICK_MISSION = "Select A Mission:";
SELECT_SAVE_SLOT = "Select a Saved Start Point";
SELECT_TARGETED = "SELECT TARGETED";
SEPARATOR = "SEPARATOR";
SERIAL = "Serial";
SERVE = "Serve";
SERVER_CHOOSES = "Server Chooses";
SERVER_TYPE = "SERVER TYPE";
SERVE_AND_PLAY = "Serve and Play";
SESSIONS = "SESSIONS";
SESSIONS_FOUND = "SESSIONS FOUND";
SETTINGS = "&Audio/Video Options";
SFX_VOLUME = "SFX Volume";
SHADOWS = "Shadows";
SHELL_FX = "Shell FX";
SHIFT = "SHIFT";
SHOW_EVERYTHING = "Show Everything";
SHOW_FRIENDLY = "Show Friendly";
SIDEARM = "SECONDARY WEAPON:";
SIDE_PASSWORD = "SIDE PASSWORD";
SIDE_PREFERENCE = "SIDE PREFERENCE";
SINGLE_PLAYER = "&Single Player";
SMOKE_FX = "Smoke FX";
SNAPSHOT = "SNAPSHOT";
SPACE_BAR = "SPACE BAR";
SPAWN_PRIMARY = "Spawn with Primary";
SQUAD_MEMBERS = "Squad Members";
SQUAD_PASSWORD_-_BLUE = "Squad Password - Blue";
SQUAD_PASSWORD_-_RED = "Squad Password - Red";
SQUAD_PASSWORD_-_VIOLET = "Squad Password - Violet";
SQUAD_PASSWORD_-_YELLOW = "Squad Password - Yellow";
STAND = "STAND";
START_AT_BEGINNING = "Start from mission beginning...";
START_BRIEFING = "&Start Briefing";
START_DELAY = "Start Delay";
START_HOSTING = "START &HOSTING";
START_MISSION = "START &MISSION";
STATS_OPTIONS = "STATS OPTIONS";
STATUS = "Status:";
STAT_SERVER_OPTIONS = "Stat Server";
STOP = "&STOP";
STOP_BRIEFING = "&Stop Briefing";
STRAFE_LEFT = "STRAFE LEFT";
STRAFE_RIGHT = "STRAFE RIGHT";
STRATEGY = "STRATEGY";
SUGGESTED = "Suggested Gear:";
SUGGESTED_LOADOUT = "&Use Suggested";
TAB = "TAB";
TALK = "TALK";
TCP/IP = "TCP/IP";
TEAM_DEATHMATCH = "TEAM DEATHMATCH";
TEAM_DEATHMATCH_MP = "~0TDM ~164hz";
TEAM_FLAGBALL = "TEAM FLAGBALL";
TEAM_GEAR = "&TEAM GEAR";
TEAM_KING_OF_THE_HILL = "TEAM KING OF THE HILL";
TEAM_KING_OF_THE_HILL_MP = "Team King of the Hill";
TEAM_LIVES = "Team Lives";
TEAM_OPTIONS = "&Team Options";
TEAM_PASSWORD = "TEAM PASSWORD";
TEAM_PREFERENCE = "TEAM PREFERENCE";
TEAM_SELECTION = "Team Selection";
TEAM_TAGS = "TEAM TAGS";
TEAM_TALK = "TEAM TALK";
TECH_SUPPORT = "All tech support questions should be sent to support@novalogic.com";
TERRAIN_DETAIL = "Terrain Detail";
TERRAIN_TEXTURES = "Terrain Textures";
TIMEOUT_BOX = "Timeout Box";
TIME_LIMIT = "Time Limit";
TOGGLE_HOST_SCREEN = "TOGGLE HOST SCREEN";
TOGGLE_NIGHT_VISION = "TOGGLE NIGHT VISION";
TOSSSLOT = "DROP CURRENT WEAPON";
TRACERS = "Tracers";
TURBO = "TURBO";
TURN_LEFT = "TURN LEFT";
TURN_RIGHT = "TURN RIGHT";
UNKNOWN = "Unknown";
UNKNOWN_GAME_TYPE_MP = "Unknown Game Type";
UNMUTE_SELECTED_PLAYER = "UNMUTE SELECTED PLAYER";
UP = "UP";
UPDATE_DEMO = "Update Demo";
UPDATE_PRODUCT = "&Update Game";
USE_STAT_SERVER = "Use Stat Server";
VIDEO = "VIDEO";
VIDEO_OPTIONS = "Video Options";
VIDEO_RESOLUTION = "VIDEO RESOLUTION";
VIDEO_SETTINGS = "VIDEO SETTINGS";
VIEW_CREDITS = "View C&redits";
VIEW_DESIGN_NOTES = "&VIEW DESIGN NOTES";
VIOLET = "Violet";
VISIT_WEBSITE = "VISIT &WEBSITE";
VOICE-OVER-NET = "Voice Over Net";
VOICE-OVER-NET_MODE = "VOICE-OVER-NET MODE";
VOICE_ACTIVATED = "Voice Activated";
VON = "&VON";
VON_BLURB = "Press "Check Recording Level" and talk into your mic for 5 seconds. Adjust "Recording Volume" and mic distance to achieve the desired volume and clarity.";
VON_DISPLAY = "VON DISPLAY";
WALK = "WALK";
WEAPON_LOADOUT = "WEAPON LOADOUT";
WEAPON_RECOIL = "Weapon Recoil";
WEAPON_RESTRICTION = "Weapon &Restrict";
WIND = "Wind";
WINDOWED = "Windowed";
WIN_CONDITIONS = "&Win Conditions";
YELLOW = "Yellow";
YES = "Yes";
ZOOM = "ZOOM";
ZOOM_IN = "ZOOM IN";
ZOOM_OUT = "ZOOM OUT";
CAMPAIGN_NAME01 = "Black Hawk Down";
CAMPAIGN_NAME02 = "Team Sabre:  Columbia";
CAMPAIGN_NAME03 = "Team Sabre:  Iran";

'[RemapActions]'
1STPERSON = "1st/3rd Person View";
ALT_MOVE_BACK = "Alternate Move Back";
ALT_MOVE_FORWARD = "Alternate Move Forward";
ALT_SLIDE_LEFT = "Alternate Strafe Left";
ALT_SLIDE_RIGHT = "Alternate Strafe Right";
ATTACK_1 = "Attack";
AUDIOMACROS = "Audio Command";
MOVE_BACK = "Back";
BINOCULARS = "Binoculars";
VONBT = "Break Talker";
CAMERADOWN = "Camera Down";
CAMERALEFT = "Camera Left";
CAMERARIGHT = "Camera Right";
CAMERAUP = "Camera Up";
CAMERAZOOMIN = "Camera Zoom In";
CAMERAZOOMOUT = "Camera Zoom Out";
MAGAZINE = "Change Magazine";
TALK = "Chat";
COMMAND = "Command Prompt";
BIGMAP = "Commander's Screen";
CROSSHAIRCOLOR = "Crosshair Color";
CROUCH = "Crouch";
CYCLE = "Cycle Weapons";
6DETONATOR = "Detonator";
DETONATOR = "Detonator";
WEAPON6 = "Detonator";
VONDLT = "Display Last Talker";
DROP = "Drop Item";
0TOSSSLOT = "Drop Weapon";
TOSSSLOT = "Drop Weapon";
5EXPLOSIVES = "Explosive";
EXPLOSIVES = "Explosives";
WEAPON5 = "Explosives";
MOVE_FORWARD = "Forward";
7GRENADE = "Grenade";
GRENADE = "Grenade";
WEAPON7 = "Grenade";
SHOWGUN = "Gun Display Toggle";
HELP = "Help";
MOVE_JUMP = "Jump";
1KNIFE = "Knife";
KNIFE = "Knife";
WEAPON4 = "Knife";
8LASER = "Laser Designator";
LASER = "Laser Designator";
WEAPON8 = "Laser Designator";
LOAD = "Load Game";
LOAD GAME = "Load Game";
LOADGAME = "Load Game";
LOOK_DOWN = "Look Down";
LOOK_UP = "Look up";
MISSIONGOALS = "Mission Goals";
VONMCT = "Mute Current Talker";
NEXTFLAG = "Next Flag";
NEXTWAYPOINT = "Next Waypoint";
NVG = "Night Vision Goggles";
PAUSE = "Pause";
KILLLIST = "Player List";
3PRIMARY_WEAPON = "Primary Weapon";
PRIMARY_WEAPON = "Primary Weapon";
WEAPON1 = "Primary Weapon";
PRINTSCREEN = "Print Screen";
PRONE = "Prone";
ZOOMIN = "Radar Zoom In";
ZOOMOUT = "Radar Zoom Out";
OLDMESSAGES = "Recent Messages";
VONRVD = "Record Volume Decrease";
VONRVU = "Record Volume Increase";
SAVE = "Save Game";
SAVE GAME = "Save Game";
SAVEGAME = "Save Game";
SCOPE = "Scope";
SCOPEMAG = "Scope Magnification";
SCOPEDEC = "Scope Zero Decrease";
SCOPEINC = "Scope Zero Increase";
4SECOND_WEAPON = "Secondary Weapon";
SECOND_WEAPON = "Secondary Weapon";
WEAPON2 = "Secondary Weapon";
VONSLT = "Select Last Talker";
VONSBX = "Select Target";
SERVER = "Server Screen";
SHOWFRIENDLY = "Show Friendly Tags";
2SIDEARM = "Secondary Weapon";
SIDEARM = "Secondary Weapon";
WEAPON3 = "Secondary Weapon";
9MEDIC = "Special Ability";
SPECIAL = "Special Ability";
WEAPON9 = "Special Ability";
STAND = "Stand";
SLIDE_LEFT = "Strafe Left";
SLIDE_RIGHT = "Strafe Right";
STALK = "Team Chat";
TURN_LEFT = "Turn Left";
TURN_RIGHT = "Turn Right";
VONUSP = "Unmute Selected";
VONDISPLAY = "VON Display";
VONTALK = "VON Talk";
NORUN = "Walk";

'[RemapKeys]'
ALT = "Alt";
APPS = "Apps";
ATTN = "Attn";
BACKSPACE = "Bksp";
CANCEL = "Cancel";
CAPS_LOCK = "CapsLock";
CLEAR = "Clear";
CONVERT = "Convert";
CRSEL = "Crsel";
CTRL = "Ctrl";
DELETE = "Delete";
DOWN = "Down";
END = "End";
ENTER = "Enter";
EREOF = "Ereof";
EXECUTE = "Execute";
EXSEL = "Exsel";
F1 = "F1";
F10 = "F10";
F11 = "F11";
F12 = "F12";
F2 = "F2";
F3 = "F3";
F4 = "F4";
F5 = "F5";
F6 = "F6";
F7 = "F7";
F8 = "F8";
F9 = "F9";
FINAL = "Final";
HANGUL = "Hangul";
HELP = "Help";
HOME = "Home";
INSERT = "Insert";
JUNJA = "Junja";
KANJI = "Kanji";
KEYPAD_* = "Numpad *";
KEYPAD_+ = "Numpad +";
KEYPAD_- = "Numpad -";
KEYPAD_. = "Numpad .";
KEYPAD_/ = "Numpad /";
KEYPAD_0 = "Numpad 0";
KEYPAD_1 = "Numpad 1";
KEYPAD_2 = "Numpad 2";
KEYPAD_3 = "Numpad 3";
KEYPAD_4 = "Numpad 4";
KEYPAD_5 = "Numpad 5";
KEYPAD_6 = "Numpad 6";
KEYPAD_7 = "Numpad 7";
KEYPAD_8 = "Numpad 8";
KEYPAD_9 = "Numpad 9";
LEFT = "Left";
LEFT_MENU = "Left Menu";
MODECHANGE = "Modechange";
NONAME = "Noname";
NONCONVERT = "Nonconvert";
NUM_LOCK = "NumLock";
OEM_CLEAR = "OEM Clear";
PA1 = "PA1";
PAGE_DOWN = "PageDown";
PAGE_UP = "PageUp";
PAUSE = "Pause";
PLAY = "Play";
PROCESS = "Process";
RIGHT = "Right";
RIGHT_MENU = "Right Menu";
SCROLL_LOCK = "Scroll Lock";
SELECT = "Select";
SEPARATOR = "Separator";
SHIFT = "Shift";
SNAPSHOT = "Snapshot";
SPACE_BAR = "Spacebar";
TAB = "Tab";
UP = "Up";
ZOOM = "Zoom";

'[WeaponDescriptions]'
WEAP_LONG_AK47 = "Built sturdy and simple to operate, the AK-47 is the preferred weapon of many former Warsaw Pact armies.
";
WEAP_LONG_AMMO = "Double ammo load";
WEAP_LONG_AT4 = "Designated the AT-4 by the US Army, the Alliant Techsystems M136 rocket launcher is considered disposable and recoilless .
";
WEAP_LONG_AUG = "With excellent accuracy, ambidextrous ergonomic design and an integrated grenade launcher, the AUG (Armee Universal Gewehr) is a first rate assault rifle.
";
WEAP_LONG_BINOCULARS = "Binoculars:  Use the B key for long range observation.";
WEAP_LONG_CALICO = "The Calico s relatively low accuracy is made up for by its high magazine capacity.
";
WEAP_LONG_CLAYMORE = "This directional fragmentation mine is planted in the ground with the convex side facing the enemy (clearly marked,  FRONT TOWARD ENEMY ).
";
WEAP_LONG_DGRENADE = "6 Fragmentation Grenades:
Time Delay (4-7 seconds).
";
WEAP_LONG_FNMAG = "This light support machine gun is more lethal and has greater penetration than the SAW, however it tends to be less accurate.
";
WEAP_LONG_G11 = "This extremely light assault rifle is relatively quiet and has little recoil due to its lack of extractors or spent casings.
";
WEAP_LONG_GLOCK = "The Glock 18 is extremely formidable due to its lightweight concealability and capacity for firing fully automatic.
";
WEAP_LONG_GRENADE = "6 Fragmentation Grenades:
Detonates on impact
";
WEAP_LONG_JACKHAMMER = "A pre-loaded rotating cylinder gives the Jackhammer its relatively high rate of fire for a shotgun.
";
WEAP_LONG_KEVLAR = "Provides limited resistance to small arms fire.";
WEAP_LONG_KNIFE = "For silent close combat take-downs.";
WEAP_LONG_LASERDESIGNATOR = "For designating targets for artillery strikes.";
WEAP_LONG_M40 = "Based on the Remington model 700, this bolt action rifle is optimized for pinpoint accuracy.  Equiped with 10x zoom scope.
";
WEAP_LONG_M82AL = "The Barrett 0.50  Light Fifty  model 82A1 is a long-range hard target interdiction weapon.  Equipped with 14x zoom scope.
";
WEAP_LONG_MASTERKEY = "Lightweight and accurate, the M4 is based on the larger M16.  The Masterkey incorporates a highly modified Remington M870 shotgun attached under the barrel of the rifle.";
WEAP_LONG_MEDICPACK = "Usable by medics only.";
WEAP_LONG_MM1 = "The 12 shot revolver on the MM-1 allows for easy loading and rapid firing.";
WEAP_LONG_MP5 = "Built with the special H&K roller-locked bolt system, this silent sub-machine gun is capable of single-shot, controlled burst and full-automatic firing.
";
WEAP_LONG_OICW = "Although heavier than most other assault rifles, the OICW is highly accurate, sturdy and lethal. The ideal weapon for the Land Warrior program.
";
WEAP_LONG_P11 = "This virtually silent pistol is used for infiltration from sea to shore.  An electric charge is used to fire the rounds.
";
WEAP_LONG_PSG1 = "This light rifle is highly accurate, though its range and penetration is compromised by the built-in silencer and its subsonic ammunition.
";
WEAP_LONG_REBREATH = "Allows operative to stay underwater longer. Wearing the Lar V on land will decrease your movement speed.
";
WEAP_LONG_SATCHEL = "After placing this high explosive pack on your target, move to a safe range and detonate with a radio signal.";
WEAP_LONG_SAW = "This hand-held light support machine gun delivers a massive amount of firepower to support infantry squad operations.";
WEAP_LONG_UMP = "The UMP is considered more reliable than the MP5 with its better range and stopping power.";
WEAP_LONG_USP = "Made from a polymer plastic, the .45 employs a mechanical recoil reduction system and the signature Heckler & Koch polygonal barrel for increased accuracy.";
WEAP_LONG_USPS = "The added silencer allows for virtually silent takedowns. However, it will also decrease muzzle velocity and slightly degrade the stopping power of the weapon.";
WEAP_LONG_UWR = "Intended to be used for underwater combat, the UAW quietly fires specially designed 150 mm long darts which are capable of penetrating wet suits and face masks at range.";
WEAP_SHORT_AK47 = "AK-47";
WEAP_SHORT_AMMO = "Extra Ammo";
WEAP_SHORT_AT4 = "AT-4";
WEAP_SHORT_AUG = "Steyr AUG/M203";
WEAP_SHORT_BINOCULARS = "Binoculars";
WEAP_SHORT_CALICO = "Calico";
WEAP_SHORT_CLAYMORE = "Claymore";
WEAP_SHORT_DGRENADE = "Delayed Grenade";
WEAP_SHORT_FNMAG = "FN-MAG";
WEAP_SHORT_G11 = "G11";
WEAP_SHORT_GLOCK = "Glock 18";
WEAP_SHORT_GRENADE = "Frag Grenade";
WEAP_SHORT_JACKHAMMER = "Pancor Jackhammer";
WEAP_SHORT_KEVLAR = "Kevlar Vest";
WEAP_SHORT_KNIFE = "Knife";
WEAP_SHORT_LASERDESIGNATOR = "Laser Designator";
WEAP_SHORT_M40 = "M-40 Sniper Rifle";
WEAP_SHORT_M82AL = "M82A1 Barret .50 cal";
WEAP_SHORT_MASTERKEY = "M4 Masterkey";
WEAP_SHORT_MEDICPACK = "Medic Pack";
WEAP_SHORT_MM1 = "MM1 Grenade launcher";
WEAP_SHORT_MP5 = "Silenced MP5";
WEAP_SHORT_OICW = "OICW Landwarrior";
WEAP_SHORT_P11 = "P11 Underwater Pistol";
WEAP_SHORT_PSG1 = "PSG-1";
WEAP_SHORT_REBREATH = "LAR-V";
WEAP_SHORT_SATCHEL = "Satchel Charge";
WEAP_SHORT_SAW = "M-249 SAW";
WEAP_SHORT_UMP = "UMP";
WEAP_SHORT_USP = ".45 SOCOM";
WEAP_SHORT_USPS = "Silenced .45 SOCOM";
WPN_HYDRA70 = "Hydra 70";

'[Macros]'
MACRO_0 = "I'm on offense";
MACRO_1 = "I'm on defense";
MACRO_2 = "Snipers take overwatch positions";
MACRO_3 = "Guard the base";
MACRO_4 = "Cover me";
MACRO_5 = "I'll cover you";
MACRO_6 = "I've got the flag";
MACRO_7 = "Help cover incoming flag";
MACRO_8 = "Enemy sniper shooting at base";
MACRO_9 = "I need a medic";
`,
  "resources/game_strings/gameerr.bin": `'[Generic Error Strings]'
STRE_NOGAMETEXT = "Unable to find game text";
STRE_TITLE = "Program Error:";
STRE_NOINITPRO = "Unable to Initialize Provider.";
STRE_CANTHOST = "Unable to Host a Session.";
STRE_NOCREATEHOST = "Unable to Create Host Player.";
STRE_CDTROUBLE = "Error reading from CD";
STRE_PIRATE = "This non-retail version of the game can not play on NovaWorld servers.";

'[MP Errors]'
CVOLDVERSION = "Your version of this game is older than the servers.  Please check for an update.";
CVNEWVERSION = "Your version of this game is newer than the servers.  Please try another server.";
PING_TOO_LOW = "Your ping times are below the minimum allowed by this server.  Please choose another server.";
PING_TOO_HIGH = "Your ping times are above the maximum allowed by this server.  Please choose another server.";
CVINCORRECTPW = "Your password is incorrect.  This game requires a valid password before you can join.";
CVBADRANK = "Your experience level is either too high or too low to enter this game.  Please select a different game to join.";
CVTIMEOUT = "Your access to this NovaWorld game has expired.  To access NovaWorld games, you must purchase the retail version of this game.";
CVBADLOGINCREDENTIALS = "Your NovaWorld login information is either absent, expired, or invalid.  Please log in to NovaWorld and try joining again.";
CVUSERONLINE = "Your NovaWorld login account is already in use by another player.  NovaWorld only allows one player logged in per account.  If you have just recently left a NovaWorld statistic game, NovaWorld may still be processing your data.  Please try again in a few minutes.";
CVNOLOGIN = "Your NovaWorld login account doesn't exist.  You must have a valid NovaWorld Login to play on NovaWorld.";
CVUNABLETOCREATE = "Unable to join game.  Please try again or select another game to join.";
CVNWTIMEOUT = "Unable to connect to your selected Novaworld game.";
CVSTATCLIENTERR = "Unable to connect to game server.  Please try again later.";
CVBADBUILD = "This version of this game is not compatible with the host.";
CVSERVERFULL = "This server is full.  Please select another game to join.";
CVNEEDPW = "This game requires a valid password before you can join.  Please type in the correct password below:";
CVCLOSED = "This game has been closed.  Please select another game to join.";
CVNEEDTEAMPREF = "This game allows you to choose which team you will join.  Please select your team preference below.";
CVBANNED = "The host is not allowing you to join this server.";
CVNOCHARACTER = "The character you specified doesn't exist on NovaWorld.  Please select a different character or create a new one and try again.";
CVSTATSAYSNO = "NovaWorld statistic services are temporarily closed.  Please try connecting to non-statistic service games.";
CVSTATSERVER = "NovaWorld Statistic Services are currently disabled.  Please try again later.";
CVLOGINMISMATCH = "Login information not up to date.  Please re-login.";
CVBADSPASS = "Incorrect team password.  You must enter a valid team password in order to join this game.";
CVBADKEY = "Bad key received from server.";
CVUNKNOWN = "An unknown error has occurred.  Please try again.  If you continue to see this message, please contact NovaLogic technical support.";
CVUNKNOWNJOIN = "An error has occurred while joining session.  Please try again.  If you continue to see this message, please contact NovaLogic technical support.";
BBONLY = "The server has determined that the connection between computers fell below the minimum specifications.  Please try a different server or try again later.";
CBBBONLY = "The server you are trying to connect to is a broadband only server.  This server has determined that the connection between the two computers does not meet the minimum specification.  Please try a different server.
";
WRONGMOD = "The server you are attempting to connect to is running a different MOD than you are.  Please rerun the program under the correct MOD and try again.
";

'[Generic Strings]'
PRE_CONNECTED = "Starting game";
PRE_JOININGSESSION = "Joining Session";
PRE_STARTINGSESSION = "Starting Session";
PRE_VERIFYING = "Verifying";
START_MENU = "Initializing Menus";
`,
  "resources/game_strings/keyhelp.bin": `'[Keys]'
' = "'";
, = ",";
- = "-";
. = ".";
/ = "/";
; = ";";
= = "=";
ACCEPT = "Accept";
ADD = "Numpad +";
APPS = "Apps";
ATTN = "Attn";
Alt- = "Alt-";
BACK = "Backspace";
CANCEL = "Cancel";
CAPITAL = "Caps Lock";
CLEAR = "Clear";
CONTROL = "Ctrl";
CONVERT = "Convert";
CRSEL = "CRSEL";
Ctrl- = "Ctrl-";
DECIMAL = "Numpad .";
DELETE = "Delete";
DIVIDE = "Numpad /";
DOWN = "Down";
END = "End";
EREOF = "EREOF";
ESCAPE = "Esc";
EXECUTE = "Execute";
EXSEL = "EXSEL";
F1 = "F1";
F10 = "F10";
F11 = "F11";
F12 = "F12";
F13 = "F13";
F14 = "F14";
F15 = "F15";
F16 = "F16";
F17 = "F17";
F18 = "F18";
F19 = "F19";
F2 = "F2";
F20 = "F20";
F21 = "F21";
F22 = "F22";
F23 = "F23";
F24 = "F24";
F3 = "F3";
F4 = "F4";
F5 = "F5";
F6 = "F6";
F7 = "F7";
F8 = "F8";
F9 = "F9";
FINAL = "Final";
HANGUL = "Hangul";
HANJA = "Hanja";
HELP = "Help";
HOME = "Home";
Hat_Down = "Hat Down";
Hat_Up = "Hat Up";
Hat_left = "Hat Left";
Hat_right = "Hat Right";
INSERT = "Insert";
JOYAXIS1 = "Joy Axis 1";
JOYAXIS2 = "Joy Axis 2";
JOYAXIS3 = "Joy Axis 3";
JOYAXIS4 = "Joy Axis 4";
JOYAXIS5 = "Joy Axis 5";
JOYAXIS6 = "Joy Axis 6";
JOYAXIS7 = "Joy Axis 7";
JOYAXIS8 = "Joy Axis 8";
JOYBUTTON = "Button %d";
JUNJA = "Junja";
KEY = "Key";
LBUTTON = "mouse 1";
LCONTROL = "Left Ctrl";
LEFT = "Left";
LMENU = "Left Alt";
LSHIFT = "Left Shift";
LWIN = "Lwin";
MBUTTON = "mouse 3";
MENU = "Alt";
MIDDLE = "Middle";
MODECHANGE = "Modechange";
MOUSEX = "Mouse X";
MOUSEY = "Mouse Y";
MULTIPLY = "Numpad *";
MWHLDN = "Mouse Whl Dn";
MWHLUP = "Mouse Whl Up";
NEXT = "Page Down";
NONAME = "NONAME";
NONCONVERT = "Non Convert";
NUMLOCK = "Numlock";
NUMPAD0 = "Numpad 0";
NUMPAD1 = "Numpad 1";
NUMPAD2 = "Numpad 2";
NUMPAD3 = "Numpad 3";
NUMPAD4 = "Numpad 4";
NUMPAD5 = "Numpad 5";
NUMPAD6 = "Numpad 6";
NUMPAD7 = "Numpad 7";
NUMPAD8 = "Numpad 8";
NUMPAD9 = "Numpad 9";
OEM_CLEAR = "OEM_CLEAR";
OR = " or ";
PA1 = "PA1";
PAUSE = "Pause";
PLAY = "PLAY";
PRINT = "Print Screen";
PRIOR = "Page Up";
RBUTTON = "Mouse 2";
RCONTROL = "Right Ctrl";
RETURN = "Enter";
RIGHT = "Right";
RMENU = "Right Alt";
RSHIFT = "Right Shift";
RWIN = "Rwin";
SCROLL = "Scroll Lock";
SELECT = "Select";
SEPARATOR = "Separator";
SHIFT = "Shift";
SNAPSHOT = "Snapshot";
SPACE = "Space";
SUBTRACT = "Numpad -";
Shift- = "Shift-";
TAB = "Tab";
UP = "Up";
ZOOM = "ZOOM";
\\ = "\\";
\` = "\`";
or = "or";

'[Text]'
1cannon = "Select Combat Knife";
1stPerson = "1stPerson";
2rockets = "Select Sidearm";
3Stingers = "Select CAR -15 Assault Rifle";
3dilist = "3DIList";
4Hellfire = "Select M21 Sniper Rifle";
5Artillery = "Select Grenades";
6Detonator = "Select Detonator";
7Medpack = "Select Medpack";
8AutoTakedown = "Order Takedown";
Accessory = "Explosive";
AudioEmote = "Emotes";
AutoTakedown = "Room Takedown";
Ban = "Ban";
BigMap = "Commander's Map";
Binoculars = "Binoculars";
Bozo = "Bozo";
CAMERA = "Camera";
CHANGE_SCREEN = "PgUp and PgDn to change pages";
CHEAT = "Cheat";
COMMUNICATIONS = "Communications and Multiplayer";
CYCLE_STRING = "* Shift modifies this key to cycle in reverse order";
CameraDown = "Camera Down";
CameraLeft = "Camera Left";
CameraRestore = "Reset Camera";
CameraRight = "Camera Right";
CameraUp = "Camera Up";
CameraZoomIn = "Camera Zoom In";
CameraZoomOut = "Camera Zoom Out";
CoolNVG = "CoolNVG";
CrossHairColor = "CrossHairColor";
Crouch = "Crouch";
DEBUG = "Debug";
Drop = "DropItem";
FARP = "FARP";
FrmSpecial = "Switch Back From Special Weapon";
Gimme = "Gimme";
HELPTITLE = "Help - %s";
LastGame = "LastGame";
Last_move = "Autorun Toggle";
LeanRoll_Left = "Lean / Roll Left";
LeanRoll_Right = "Lean / Roll Right";
LoadGame = "Load";
MAP = "Map";
MOVEMENT = "Movement";
MPSCREENKEYS = "Press 'A' for advanced stats, 'S' to save to text file";
MedicReq = "Request Medic";
MissionGoals = "Goals";
NOVALOGIC = "NovaLogic";
NULL = "Null";
NVG = "Night Vision";
NextFlag = "NextFlag";
NextWaypoint = "Cycle Waypoints";
NoRun = "Walk";
Objectives = "Goals";
OldMessages = "Recent Messages";
PAGE = "Page %i of %i";
Pause = "Pause Game";
Pause2 = "Pause Game 2";
PrintScreen = "Screen Shot";
Prone = "Prone";
Punt = "Punt";
PuntCRC = "PuntCRC";
PuntLog = "PuntLog";
Repeatcommand = "Repeat Command";
SERVER = "Server";
SYSTEM = "System";
SaveGame = "Quick Save";
ScopeZero = "Scope Zero (Shift)";
ScopeZeroDec = "Scope Elevation Down";
ScopeZeroDecMse = "Scope Elevation Down 2";
ScopeZeroInc = "Scope Elevation Up";
ScopeZeroIncMse = "Scope Elevation Up 2";
ShowFriendly = "FriendlyTags On/Off";
ShowScore = "Score";
Slide = "Strafe";
Stand = "Stand";
Tfriendlies = "Target Friendlies On / Off";
Tmode_0 = "Switch Targeting Mode";
ToSpecial = "Switch To Special Weapon";
UNKNOWN = "Unknown Type";
VON = "Voice Over Net";
Verbose = "Verbose";
VonBT = "BreakTalker";
VonDLT = "DisplayLastTalker";
VonDisplay = "Display";
VonMCT = "MuteCurrentTalker";
VonRVD = "DecreaseRecordVolume";
VonRVU = "IncreaseRecordVolume";
VonSBX = "SelectTarget";
VonSLT = "SelectLastTalker";
VonTalk = "PushToTalk";
VonUSP = "UnmuteSelectedPlayer";
WEAPONS = "Weapons and Equipment";
aimod = "GiveAIGrenades";
alt_move_back = "Back 2";
alt_move_forward = "Forward 2";
attack_1 = "Fire Weapon";
attack_2 = "Alternate Fire";
bayDoors = "NA";
bayDoors_alt = "NA";
bigguns = "ArtilaryStrikes";
breakpoint = "Breakpoint";
briefing = "Mission Briefing";
capture_pkts = "capturepkts";
center_view = "CenterView";
collective_dec = "Lower Altitude";
collective_inc = "Raise Altitude";
collectiveturbo_dec = "Lower Altitude";
collectiveturbo_inc = "Raise Altitude";
command = "Command Prompt";
comsizes = "ComSizes";
corbet = "Invisible";
crouch_alt = "Crouch 2";
cycle = "CycleWeapons";
cycleweaponN = "Scope Magnify Down";
cycleweaponP = "Scope Magnify Up";
d_down = "DebugDown";
d_end = "DebugEnd";
d_home = "DebugHome";
d_left = "DebugLeft";
d_pgdn = "DebugPgDn";
d_pgup = "DebugPgUp";
d_right = "DebugRight";
d_up = "DebugUp";
debug_hud = "DebugHUD";
detonator = "Radio Detonator";
domi = "ArtilaryStrikes";
dotsize = "Aimpoint Brightness";
drucilla = "MegaMANA";
drury = "FullAmmo";
dualcpu = "DualCPU";
effect = "CreateParticleEffect";
engine = "Open FARP Menu";
escape = "Exit / Load Saved Game";
exit = "ExitMission";
fincrementalt = "Add Selection (alt)";
flare = "Drop Flares";
flashbang = "Flashbang Grenade";
flipmouse = "FlipMouse";
fly_down = "FlyDown";
fly_up = "FlyUp";
fnext = "Next";
fogcolor = "FogColor";
foglevel = "FogLevel";
fok = "Accept Current Loadout";
fokalt = "Accept Current Loadout";
fraggrenade = "Frag Grenade";
freloadcrnt = "Reload Current Loadout";
fsclear = "Clear Current Selection";
fselect = "Add To Current Selection";
fselectalt = "Add To Current Selection";
fselectdec = "Remove From Current Selection";
fselectdecalt = "Remove From Current Selection";
fselectinc = "Add To Current Selection";
fselectincalt = "Add To Current Selection";
fselectnext = "Move To Next Selection";
fselectprevious = "Move To Previous Selection";
fullammo = "FullAmmo";
fweap2hydras = "Select Hydras";
fweap3stingers = "Select Stingers";
fweap4hellfires = "Select Hellfires";
fweap5efams = "Add/Remove EFAMS";
fweap6ltload = "Use Light Loadout";
fweap7hvyload = "Use Heavy Loadout";
gamma = "Gamma";
gear = "Lower / Raise Landing Gear";
gear_alt = "Lower / Raise Landing Gear";
goto = "Goto";
help = "Help";
helpmap = "Map Legend";
hudcolor = "HudColor";
huddetail = "HUD Detail Level";
hudonoff = "HUD On / Off";
infammo = "InfiniteAmmo";
invisible = "Invisible";
itemcount = "ItemCount";
kariya = "InfiniteAmmo";
killall = "KillAll";
killlist = "KillList";
knife = "Knife";
loadout_menu = "Armory";
lockbreak = "Break Active Lock";
lockbreak_alt = "Break Active Lock";
lockgame = "LockGame";
locktarget = "Cycle Targets";
lod = "ForceLOD";
look_dn_abs = "AbsoluteLookDown";
look_down = "Look Down";
look_up = "Look Up";
look_up_abs = "AbsoluteLookUp";
magazine = "Reload";
map_toggle = "Toggle Map";
mcolor = "Mcolor";
medpack = "Medic Pack";
megahp = "MegaHP";
megamana = "MegaMANA";
memdump = "MemoryDump";
mousescale = "MouseScale";
move_back = "Back";
move_forward = "Forward";
move_jump = "Jump";
movegun = "MoveGun";
netdelay = "NetDelay";
netdump = "NetDump";
noclip = "NoClip";
objects = "Objects";
pitch_down = "Pitch Down";
pitch_down_alt = "Pitch Down (alt)";
pitch_up = "Pitch Up";
pitch_up_alt = "Pitch Up (alt)";
playerlist = "Display Kills / Player List";
playerlist_alt = "Kills / Player List";
polycounts = "PolyCount";
polys = "Polys";
pos = "Position";
primary = "Primary Weapon";
prone_alt = "Prone 2";
propaganda = "Framerate";
quicksand = "Collide";
quit = "ExitGame";
radarin = "Zoom Map In";
radarout = "Zoom Map Out";
repeatcommand = "Repeat Command";
resetgames = "ResetGame";
restart = "RestartMission";
roy = "MegaHP";
rparticles = "ReloadParticles";
savescores = "SaveScores";
scope = "Scope Toggle";
scopedec = "ScopeZeroDecrease";
scopeinc = "ScopeZeroIncrease";
scopemag = "ScopeMag";
scopescale = "ScopeScale";
secondary = "Secondary Weapon";
sendkeypswds = "SendKeyPasswords";
server = "ServerScreen";
set_alt1 = "Move To Low Altitude";
set_alt1_alt = "Move To Low Altitude";
set_alt2 = "Move To Medium Altitude";
set_alt2_alt = "Move To Medium Altitude";
set_alt3 = "Move To High Altitude";
set_alt3_alt = "Move To High Altitude";
setasslot0 = "SetasSlot0";
setasslot1 = "SetasSlot1";
setasslot2 = "SetasSlot2";
setasslot3 = "SetasSlot3";
setasslot4 = "SetasSlot4";
setasslot5 = "SetasSlot5";
setasslot6 = "SetasSlot6";
setasslot7 = "SetasSlot7";
setasslot8 = "SetasSlot8";
setasslot9 = "SetasSlot9";
setchar = "SetChar";
setkey = "SetKey";
settoslot0 = "SettoSlot0";
settoslot1 = "SettoSlot1";
settoslot2 = "SettoSlot2";
settoslot3 = "SettoSlot3";
settoslot4 = "SettoSlot4";
settoslot5 = "SettoSlot5";
settoslot6 = "SettoSlot6";
settoslot7 = "SettoSlot7";
settoslot8 = "SettoSlot8";
settoslot9 = "SettoSlot9";
shadow = "Shadow";
showgun = "1stPersonGunView";
silencer = "Silencer";
sky = "Sky";
slide_left = "Slide Left";
slide_right = "Slide Right";
smokegrenade = "Smoke Grenade";
spans = "Spans";
stalk = "Team Talk";
stand_alt = "Stand 2";
stopai = "PauseAI";
strafe_left = "Strafe Left";
strafe_left_alt = "Strafe Left 2";
strafe_right = "Strafe Right";
strafe_right_alt = "Strafe Right 2";
talk = "Talk";
talkblue = "BlueTalk";
talkred = "RedTalk";
teammatemenu = "Teammate Commands";
toggle = "Toggle";
toggle_item = "ToggleItem";
tracers = "Tracers";
translate = "Translate";
turn_left = "Turn Left";
turn_left_abs = "AbsoluteTurnLeft";
turn_right = "Turn Right";
turn_right_abs = "AbsoluteTurnRight";
useitem = "Use Item / Attach";
usekey = "UseKey";
view1st = "1st Person, No Gun";
viewchase = "3rd Person View";
viewcockpit = "1st Person, with Gun";
viewdropcam = "Select Fly-By Camera";
viewlookturnlock = "Engage Freelook Mode";
voxels = "Voxels";
water = "Water";
weather = "Weather";
wind = "Wind";
wingman1 = "Auto area takedown";
wingman2 = "Hold fire / Fire at will - All";
wingman3 = "Hold fire / Fire at will - Fireteam two";
wingman4 = "Hold position / Follow Me - All";
wingman5 = "Hold position / Follow me - Fireteam two";
wingman6 = "Team Spacing";
wingman7 = "Throw Flashbang";
wingman8 = "Throw Frag Grenade";
wireframe = "Wireframe";
zoomin = "ZoomIn";
zoomout = "ZoomOut";
`,
  "resources/game_strings/meditens.bin": `'[ItemNames]'
STR_ITEM0000 = "Null";
STR_ITEM1231 = "Sandbag Wall";
STR_ITEM1415 = "S&D Flag, Red";
STR_ITEM1416 = "S&D Flag, Blue";
STR_ITEM1468 = "Large Group of Jungle Trees";
STR_ITEM2021 = "Comanche";
STR_ITEM3936 = "Jungle Style Tower";
STR_ITEM4049 = "AK-47";
STR_ITEM4050 = "Placed AK-47";
STR_ITEM4051 = "Dropped AK-47";
STR_ITEM4091 = "Blue Flag";
STR_ITEM4093 = "Red Flag";
STR_ITEM4095 = "Green Flag";
STR_ITEM4118 = "Seagull";
STR_ITEM4200 = "Communications Tower";
STR_ITEM4201 = "Wooden Army Barracks A";
STR_ITEM4202 = "Wooden Army Headquarters A";
STR_ITEM4203 = "Small Wooden Communications Tower";
STR_ITEM4204 = "Wooden Guard Tower";
STR_ITEM4205 = "Airport Terminal Building Piece 2";
STR_ITEM4206 = "Corregated Steel Garage";
STR_ITEM4207 = "Large Warehouse End Cap Section A";
STR_ITEM4208 = "Small Sized Steel Hangar";
STR_ITEM4209 = "Small Steel Hangar with Rounded Roof";
STR_ITEM4210 = "Small Communications Tower";
STR_ITEM4211 = "Airport Hanger";
STR_ITEM4212 = "Concrete Dock A";
STR_ITEM4213 = "High Rise C Lobby";
STR_ITEM4214 = "Airport Terminal Building Piece 3";
STR_ITEM4215 = "High Rise B Lobby";
STR_ITEM4216 = "European Style House C";
STR_ITEM4217 = "Oiltank";
STR_ITEM4218 = "Pup Tent";
STR_ITEM4219 = "Large Canvas Tent";
STR_ITEM4220 = "Communications Tower with Dome";
STR_ITEM4221 = "Concrete Bridge";
STR_ITEM4223 = "Silo Piece 2";
STR_ITEM4224 = "Wooden Army Barracks B";
STR_ITEM4225 = "Wooden Army Headquarters B";
STR_ITEM4226 = "Small Wooden Communications Center";
STR_ITEM4227 = "Chemical Factory Main Building";
STR_ITEM4228 = "Factory Crosswalk Section";
STR_ITEM4229 = "Smoke Stacks";
STR_ITEM4230 = "Holding Tank A";
STR_ITEM4231 = "Modular Pipe A";
STR_ITEM4232 = "Modular Pipe B";
STR_ITEM4233 = "Holding Tank B";
STR_ITEM4234 = "High Rise C Middle Section";
STR_ITEM4235 = "High Rise C Top Section";
STR_ITEM4236 = "Concrete Bridge Piece";
STR_ITEM4239 = "Destroyed Russian House A";
STR_ITEM4240 = "Destroyed Russian House B";
STR_ITEM4241 = "Destroyed Russian House C";
STR_ITEM4242 = "Airport Control Tower";
STR_ITEM4243 = "Airport Gate Piece 1";
STR_ITEM4244 = "Airport Gate Piece 2";
STR_ITEM4245 = "Airport Gate Piece 3";
STR_ITEM4246 = "Russian Storage Bunker";
STR_ITEM4247 = "Destroyed Russian House D";
STR_ITEM4248 = "Destroyed Russian House E";
STR_ITEM4249 = "Airport Terminal Building Piece 1";
STR_ITEM4250 = "Wooden Docks";
STR_ITEM4251 = "High Rise A Lobby";
STR_ITEM4252 = "Factory Piece 1";
STR_ITEM4253 = "European Style House A";
STR_ITEM4254 = "European Style House B";
STR_ITEM4255 = "European Style Apartments A";
STR_ITEM4256 = "European Style Office A";
STR_ITEM4257 = "Shipyard Crane Supports";
STR_ITEM4258 = "Boat Garage";
STR_ITEM4259 = "Embassy Building Lobby Section";
STR_ITEM4260 = "Communications Building";
STR_ITEM4261 = "Wooden Shack with Camo Netting";
STR_ITEM4262 = "Early Warning Center";
STR_ITEM4263 = "Silo";
STR_ITEM4264 = "Control Building A";
STR_ITEM4265 = "Large Warehouse Middle Section A";
STR_ITEM4266 = "European Style House D";
STR_ITEM4267 = "European Style House E";
STR_ITEM4268 = "European Style Apartments B";
STR_ITEM4269 = "European Style Office B";
STR_ITEM4270 = "High Rise A Middle Section";
STR_ITEM4271 = "High Rise A Top Section";
STR_ITEM4272 = "High Rise B Middle Section";
STR_ITEM4273 = "High Rise B Top Section";
STR_ITEM4274 = "Control Building B";
STR_ITEM4275 = "Large Warehouse End Cap Section B";
STR_ITEM4276 = "Large Warehouse Middle Section B";
STR_ITEM4277 = "Factory Piece 2";
STR_ITEM4278 = "Factory Piece 3";
STR_ITEM4279 = "Embassy Building Top Section";
STR_ITEM4280 = "Factory Smoke Stack";
STR_ITEM4281 = "Factory Water Tower";
STR_ITEM4282 = "Indestructable Concrete Bridge";
STR_ITEM4283 = "Indestructable Concrete Bridge Piece";
STR_ITEM4284 = "Tunnel Piece 1";
STR_ITEM4285 = "Tunnel Piece 2";
STR_ITEM4286 = "Shipyard Crane Boom Arm";
STR_ITEM4287 = "Fuel Tank";
STR_ITEM4288 = "Concrete Dock B";
STR_ITEM4289 = "Communications Tower (Mission Goal) ";
STR_ITEM4300 = "Single Metal Barrel";
STR_ITEM4301 = "Group of Metal Barrels";
STR_ITEM4302 = "Single Wooden Crate";
STR_ITEM4303 = "Group of Wooden Crates A";
STR_ITEM4304 = "Group of Wooden Crates B";
STR_ITEM4305 = "Small Fuel Tank";
STR_ITEM4306 = "Light Post";
STR_ITEM4307 = "Telephone Pole";
STR_ITEM4308 = "Pole with Windsock";
STR_ITEM4309 = "Portable Fire Extinguisher";
STR_ITEM4310 = "Small Step Ladder";
STR_ITEM4311 = "Larger Ladder";
STR_ITEM4312 = "Steel Storage Unit";
STR_ITEM4313 = "8 ft. Section of Chain Link Fence";
STR_ITEM4314 = "End Pole for Chain Link Fence ";
STR_ITEM4315 = "Chain Link Fence Gate";
STR_ITEM4316 = "Junge Tree Canopy (top only)";
STR_ITEM4317 = "Single Snow Canopy A";
STR_ITEM4318 = "Single Snow Canopy B";
STR_ITEM4319 = "Single Snow Canopy C";
STR_ITEM4320 = "Fallen Pine Tree A";
STR_ITEM4330 = "Jungle Canopy Piece A";
STR_ITEM4331 = "16 ft. Section of Chain Link Fence";
STR_ITEM4332 = "Large Group of Green Trees";
STR_ITEM4333 = "Jungle Canopy Piece B";
STR_ITEM4334 = "Large Group of Snowy Green Trees";
STR_ITEM4335 = "Single Green Canopy A";
STR_ITEM4336 = "Single Jungle Tree A";
STR_ITEM4337 = "Single Jungle Tree B";
STR_ITEM4338 = "Single Jungle Tree C";
STR_ITEM4339 = "Single Palm Tree D";
STR_ITEM4340 = "Single Palm Tree A";
STR_ITEM4341 = "Single Palm Tree B";
STR_ITEM4342 = "Fallen Green Tree";
STR_ITEM4343 = "Fallen Pine Tree B";
STR_ITEM4344 = "Single Green Canopy B";
STR_ITEM4345 = "Single Green Tree A";
STR_ITEM4346 = "Single Green Tree B";
STR_ITEM4347 = "Single Green Tree C";
STR_ITEM4348 = "Single Pine Tree A";
STR_ITEM4349 = "Single Pine Tree B";
STR_ITEM4350 = "Single Pine Tree C";
STR_ITEM4351 = "Small Group of Green Trees";
STR_ITEM4352 = "Small Group of Snowy Green Trees";
STR_ITEM4353 = "Long Concrete Wall";
STR_ITEM4354 = "Short Concrete Wall";
STR_ITEM4355 = "Small Group of Jungle Trees";
STR_ITEM4356 = "FARP (Rearm/Refuel Point)";
STR_ITEM4357 = "Single Snow Tree A";
STR_ITEM4358 = "Single Snow Tree B";
STR_ITEM4359 = "Single Snow Tree C";
STR_ITEM4360 = "Single Pine Tree D";
STR_ITEM4361 = "Single Pine Tree E";
STR_ITEM4362 = "Single Pine Tree F";
STR_ITEM4363 = "Large Group of Snowy Pine Trees";
STR_ITEM4364 = "Small Group of Snowy Pine Trees";
STR_ITEM4365 = "Old Glory";
STR_ITEM4366 = "Single Green Canopy C";
STR_ITEM4367 = "Single Shrub A";
STR_ITEM4368 = "Single Shrub B";
STR_ITEM4369 = "Desert Group of Scrub Bushes";
STR_ITEM4370 = "Single Desert Palm A";
STR_ITEM4371 = "Single Desert Palm B";
STR_ITEM4372 = "Single Desert Palm C";
STR_ITEM4373 = "Single Desert Palm D";
STR_ITEM4374 = "Single Cypress Tree A";
STR_ITEM4375 = "Single Cypress Tree B";
STR_ITEM4376 = "Rail Piece A";
STR_ITEM4377 = "Rail Piece B";
STR_ITEM4378 = "Rail Piece C";
STR_ITEM4379 = "Rail Piece D";
STR_ITEM4380 = "Rail Piece 64 m. Section";
STR_ITEM4381 = "Rail Piece 128 m. Section";
STR_ITEM4382 = "Single Jungle Canopy A";
STR_ITEM4383 = "Single Jungle Canopy B";
STR_ITEM4384 = "Long Sandbag Wall ";
STR_ITEM4385 = "Rail End Piece";
STR_ITEM4386 = "Single Palm Tree C";
STR_ITEM4387 = "Single Jungle Tree D";
STR_ITEM4388 = "Single Green Tree D";
STR_ITEM4389 = "Single Pine Tree G";
STR_ITEM4390 = "Single Snowy Green Tree";
STR_ITEM4391 = "Single Snowy Pine Tree";
STR_ITEM4392 = "Large Group of Pine Trees";
STR_ITEM4393 = "Small Group of Pine Trees";
STR_ITEM4394 = "Canopy of Green/Pine Trees";
STR_ITEM4395 = "Canopy of Pine Trees";
STR_ITEM4396 = "Canopy of Snowy Green/Pine Trees";
STR_ITEM4397 = "Canopy of Snowy Pine Trees";
STR_ITEM4398 = "Single Olive Tree A";
STR_ITEM4399 = "Single Olive Tree B";
STR_ITEM4505 = "Enemy Armed with Stinger Launcher";
STR_ITEM4506 = "Soldier, Unarmed";
STR_ITEM4507 = "Enemy Armed with Machine gun";
STR_ITEM4508 = "Soldier Armed with Machine gun";
STR_ITEM4509 = "Downed Pilot, Unarmed";
STR_ITEM4510 = "Civilian";
STR_ITEM4511 = "VIP - Very Important Person";
STR_ITEM4512 = "Bodyguard";
STR_ITEM4513 = "Rescue Diver";
STR_ITEM4514 = "Operative";
STR_ITEM4515 = "Enemy, Unarmed";
STR_ITEM4516 = "Seargent";
STR_ITEM4517 = "Recruit";
STR_ITEM4518 = "Mechanic";
STR_ITEM4519 = "Ground Coordinator";
STR_ITEM4520 = "Soldier Armed with Stinger Launcher";
STR_ITEM4521 = "Ground Personnel";
STR_ITEM4522 = "Snow Camo Armed with Stinger Launcher";
STR_ITEM4523 = "Snow Camo Armed with Machine gun A";
STR_ITEM4524 = "Snow Camo Armed with Machine gun B";
STR_ITEM4526 = "Snow Camo Armed with LAW";
STR_ITEM4600 = "Hokum Advanced Attack Chopper";
STR_ITEM4601 = "Jeep with Stingers";
STR_ITEM4602 = "Cargo Ship";
STR_ITEM4603 = "Avenger (Humvee with Stingers)";
STR_ITEM4604 = "Enemy Jeep with Machinegun";
STR_ITEM4605 = "Apache Ground Attack Helicopter";
STR_ITEM4606 = "Chinook Cargo Helicopter";
STR_ITEM4607 = "A-10 Thunderbolt Ground Attack Plane";
STR_ITEM4608 = "M1A2 Abrams Main Battle Tank";
STR_ITEM4609 = "M3 Bradley Infantry Vehicle";
STR_ITEM4610 = "Friendly Jeep with Machinegun";
STR_ITEM4611 = "LHA Assault Carrier";
STR_ITEM4613 = "Landrover";
STR_ITEM4614 = "Vulcan Anit-Air Cannon";
STR_ITEM4615 = "Enemy Light Helicopter";
STR_ITEM4616 = "Su-25 Frogfoot Ground Attack Plane";
STR_ITEM4617 = "T-80 Main Battle Tank";
STR_ITEM4618 = "T-72 Main Battle Tank";
STR_ITEM4619 = "BMP2 Infantry Vehicle";
STR_ITEM4620 = "SA-8 SAM Launcher";
STR_ITEM4621 = "Parked Jeep.";
STR_ITEM4622 = "Cargo truck";
STR_ITEM4623 = "BRDM Infantry Vehicle";
STR_ITEM4624 = "Hind Ground-Attack Chopper";
STR_ITEM4625 = "Snowmobile Armed with AK-47";
STR_ITEM4626 = "Havoc Anti-Air Chopper";
STR_ITEM4627 = "Enemy Speedboat";
STR_ITEM4628 = "Enemy Scud Launcher [ready to fire]";
STR_ITEM4629 = "SAM launcher";
STR_ITEM4630 = "Commercial 747";
STR_ITEM4631 = "Civilian 737";
STR_ITEM4632 = "LCAC Amphibious Assault Ship";
STR_ITEM4633 = "Zodiac Rubber Raft";
STR_ITEM4634 = "Cessna";
STR_ITEM4635 = "Enemy Remote Drones";
STR_ITEM4636 = "Limousine";
STR_ITEM4638 = "Large Yacht";
STR_ITEM4639 = "Enemy Attack Yacht";
STR_ITEM4640 = "F-16 Fixed Wing Plane";
STR_ITEM4641 = "Enemy MIG-29";
STR_ITEM4642 = "Enemy Helix Transport Chopper";
STR_ITEM4643 = "Blackhawk";
STR_ITEM4644 = "Civilian Helicopter";
STR_ITEM4645 = "Enemy Shaldag Patrol Boat";
STR_ITEM4646 = "Fuel Truck";
STR_ITEM4647 = "Downed Satellite";
STR_ITEM4648 = "SA-6 SAM Launcher";
STR_ITEM4649 = "Tunguska Mobile Anti-Air";
STR_ITEM4650 = "Enemy Submarine";
STR_ITEM4651 = "Snowmobile Armed with Stinger";
STR_ITEM4652 = "Downed Blackhawk";
STR_ITEM4653 = "Experimental Attack Boat";
STR_ITEM4654 = "Enemy Frigate";
STR_ITEM4655 = "Enemy Destroyer";
STR_ITEM4656 = "Train Locomotive";
STR_ITEM4657 = "Train Flatcar";
STR_ITEM4658 = "Train Boxcar";
STR_ITEM4659 = "Comanche (Green)";
STR_ITEM4660 = "C130 Cargo Plane";
STR_ITEM4661 = "SH-60 Seahawk";
STR_ITEM4662 = "Unarmed Cargo Ship";
STR_ITEM4663 = "Enemy Buggy with Machinegun";
STR_ITEM4664 = "Friendly Jeep [parked]";
STR_ITEM4665 = "Enemy Scud Launcher [ready to transport]";
STR_ITEM4666 = "Destroyer's Cannon Attachment";
STR_ITEM4667 = "Destroyer's Gattling Gun Attachment";
STR_ITEM4668 = "Destroyer's Missile Launcher Attachment";
STR_ITEM4669 = "Destroyer's Radar Attachment 1";
STR_ITEM4670 = "Destroyer's Radar Attachment 2";
STR_ITEM4671 = "Destroyer's Rocket Launcher  Attachment";
STR_ITEM5301 = "Comanche (Camo)";
STR_ITEM6001 = "Player Start Marker";
STR_ITEM6002 = "Deathmatch Player Start Marker";
STR_ITEM6003 = "Team Blue Start Marker";
STR_ITEM6004 = "Team Red Start Marker";
STR_ITEM6005 = "Waypoint";
STR_ITEM6006 = "KOTH Center";
STR_ITEM6013 = "Area Trigger";
STR_ITEM6026 = "MP Waypoint (Alpha)";
STR_ITEM6027 = "MP Waypoint (Red Base)";
STR_ITEM6028 = "MP Waypoint (Blue Base)";
STR_ITEM6088 = "Teleport Target Marker";
STR_ITEM6101 = "Sound: desert critters 1";
STR_ITEM6102 = "Sound: desert critters 2";
STR_ITEM6103 = "Sound: forest critters 1";
STR_ITEM6104 = "Sound: forest critters 2";
STR_ITEM6105 = "Sound: jungle critters 1";
STR_ITEM6106 = "Sound: jungle critters 2";
STR_ITEM6107 = "Sound: jungle critters 3";
STR_ITEM6108 = "Sound: jungle critters 4";
STR_ITEM6109 = "Sound: jungle loop";
STR_ITEM6110 = "Sound: Ocean sound marker 1";
STR_ITEM6111 = "Sound: Ocean sound marker 2";
STR_ITEM6112 = "Sound: Beach loop 1";
STR_ITEM6113 = "Sound: Beach loop 2";
STR_ITEM6114 = "Sound: Arctic sound marker 1";
STR_ITEM6115 = "Sound: Arctic sound marker 2";
STR_ITEM6116 = "Sound: River sound 1";
STR_ITEM6117 = "Sound: River sound 2";
STR_ITEM6118 = "Sound: Base sound 1";
STR_ITEM6119 = "Sound: desert loop";
STR_ITEM6120 = "Sound: forest loop";
STR_ITEM6121 = "Sound: Ocean loop";
STR_ITEM6122 = "Sound: HVAC 1";
STR_ITEM6123 = "Sound: HVAC 2";
STR_ITEM6124 = "Sound: Arctic loop 1";
STR_ITEM6125 = "Sound: Arctic loop 2";
STR_ITEM6126 = "Sound: River loop 1";
STR_ITEM6127 = "Sound: River loop 2";
STR_ITEM6128 = "Sound: Silo Steam loop";
STR_ITEM6129 = "Sound: Tarmac";
STR_ITEM6130 = "Sound: 747 idle";

'[AIP]'
STR_AIP_GMG = "Ground -- Generic 50cal";
STR_AIP_GMGF_P = "Ground -- Friendly Vulcan";
STR_AIP_GMG_F = "Ground -- 50cal, Fast";
STR_AIP_GMG_P = "Ground -- Enemy Vulcan";
STR_AIP_GS = "Ground -- Generic Stinger";
STR_AIP_GS_F = "Ground -- Stinger, Fast";
STR_AIP_GS_P = "Ground -- Stationary Stinger";
STR_AIP_GT = "Ground -- Enemy Tank";
STR_AIP_GTR = "Ground -- Train";
STR_AIP_GT_F = "Ground -- Friendly Tank (M1A1)";
STR_AIP_GU = "Ground -- Unarmed";
STR_AIP_GU_F = "Ground -- Unarmed, Fast";
STR_AIP_GU_S = "Ground -- Unarmed, Slow";
STR_AIP_G_AVENG2 = "Ground -- Avenger Rocket";
STR_AIP_G_AVENGR = "Ground -- Avenger SAM";
STR_AIP_G_BMP = "Ground -- BMP Rocket";
STR_AIP_G_BRADLY = "Ground -- M3 Bradley";
STR_AIP_G_BRDM = "Ground -- BRDM";
STR_AIP_G_BUGGY = "Ground -- Buggy";
STR_AIP_G_BUGGYS = "Ground -- Buggy LAW";
STR_AIP_G_JEEP = "Ground -- Jeep";
STR_AIP_G_JEEPS = "Ground -- Jeep LAW";
STR_AIP_G_MIM23 = "Ground -- MIM23B SAM";
STR_AIP_G_MIM23R = "Ground -- MIM23B Rocket";
STR_AIP_G_SA6 = "Ground -- SA6 SAM";
STR_AIP_G_SA6R = "Ground -- SA6 Rocket";
STR_AIP_G_SA8 = "Ground -- SA8 SAM";
STR_AIP_G_SA8R = "Ground -- SA8 Rocket";
STR_AIP_G_SNOW = "Ground -- Snowmobile 50cal";
STR_AIP_G_SNOWR = "Ground -- Snowmobile LAW";
STR_AIP_G_SNOWS = "Ground -- Snowmobile Stinger";
STR_AIP_G_TNGSKA = "Ground -- Tunguska AAA SAM";
STR_AIP_G_TNGSKR = "Ground -- Tunguska AAA Rocket";
STR_AIP_HMG = "Heli -- AH6 50cal";
STR_AIP_HS_F = "Heli -- Stingers, Fast";
STR_AIP_HU = "Heli -- Unarmed";
STR_AIP_H_AH6 = "Heli -- AH6 Rocket";
STR_AIP_H_APACH2 = "Heli -- Apache Air";
STR_AIP_H_APACHE = "Heli -- Apache Ground";
STR_AIP_H_BHAWK = "Heli -- Blackhawk";
STR_AIP_H_BHAWKN = "Heli -- Blackhawk (no return fire)";
STR_AIP_H_BHAWKZ = "Heli -- Blackhawk (waypoint Z follow)";
STR_AIP_H_COMANZ = "Heli -- Comanche (waypoint Z follow)";
STR_AIP_H_HAVOC = "Heli -- Havoc Stinger";
STR_AIP_H_HAVOCR = "Heli -- Havoc Rocket";
STR_AIP_H_HELIX = "Heli -- Helix Rocket";
STR_AIP_H_HIND = "Heli -- Hind Rocket";
STR_AIP_H_HOKUM = "Heli -- Hokum";
STR_AIP_H_HOKUM2 = "Heli -- Hokum Stinger";
STR_AIP_H_HOKUM3 = "Heli -- Hokum Rocket";
STR_AIP_PLANESIT = "Plane -- Static";
STR_AIP_PRETTY = "Heli -- Static";
STR_AIP_PRF_F = "Plane -- A-10 Rocket, Fast";
STR_AIP_PR_F = "Plane -- Su-25 Rocket, Fast";
STR_AIP_PR_S = "Plane -- Su-25 Rocket, Slow";
STR_AIP_PSE_F = "Plane -- Mig-29";
STR_AIP_PSE_FZ = "Plane -- Mig-29 (waypoint Z follow)";
STR_AIP_PS_F = "Plane -- F-16";
STR_AIP_PS_FZ = "Plane -- F-16 (waypoint Z follow)";
STR_AIP_P_AF1 = "Plane -- Airliner";
STR_AIP_P_CESSNA = "Plane -- Cessna";
STR_AIP_P_DRONE = "Plane -- Attack Drone";
STR_AIP_P_DRONE2 = "Plane -- Attack Drone (waypoint Z follow)";
STR_AIP_SITBOAT = "Boat -- Static";
STR_AIP_SITGRND1 = "Ground -- Static";
STR_AIP_T_CANNON = "Turret -- Cannon";
STR_AIP_T_GUN = "Turret -- Gattling gun";
STR_AIP_T_ROCKET = "Turret -- Rocket";
STR_AIP_T_SAM = "Turret -- SAM";
STR_AIP_WINGMAN = "Heli -- Wingman";
STR_AIP_WMG_F = "Boat -- Speedboat";
STR_AIP_WMG_VF = "Boat -- Patrol";
STR_AIP_WMP = "Boat -- Attack Yacht";
STR_AIP_WU = "Boat -- Unarmed";
STR_AIP_WU_F = "Boat -- Unarmed, Fast";
STR_AIP_W_BIG = "Boat -- Big Ship";
STR_AIP_W_CARGO = "Boat -- Armed Cargo Ship";
STR_AIP_W_FRIG = "Boat -- Nanuchka Frigate";
STR_AIP_W_LCAC = "Boat -- LCAC";
STR_AIP_W_ZODE = "Boat -- Zodiac";

'[LDO]'

'[ENV]'
STR_ENV_DAWN1 = "Dawn 1";
STR_ENV_DAWN2 = "Dawn 2";
STR_ENV_DAWN4 = "Dawn 3";
STR_ENV_DAY1 = "Daytime 1";
STR_ENV_DAY2 = "Daytime 2";
STR_ENV_DAY3 = "Daytime 3";
STR_ENV_DAY5 = "Daytime 4";
STR_ENV_DAYSNOW = "Daytime Snow";
STR_ENV_DUSK1 = "Dusk 1";
STR_ENV_DUSK2 = "Dusk 2";
STR_ENV_DUSK3 = "Dusk 3";
STR_ENV_DUSK5 = "Dusk 4";
STR_ENV_OVERCST1 = "Overcast 1";
STR_ENV_OVERCST5 = "Overcast 2";
STR_ENV_OVERCST6 = "Overcast 3";
STR_ENV_SUNSET1 = "Sunset 1";
STR_ENV_SUNSET2 = "Sunset 2";
STR_ENV_SUNSET4 = "Sunset 3";
STR_ENV_SUNSET5 = "Sunset 4";

'[ParticleEffects]'
STR_PE_AIREXP = "Mid Air Explosion";
STR_PE_BIGSPLASH = "Big Splash";
STR_PE_FIREBALLONLY = "Fireball";
STR_PE_GIANTEXP = "Giant Explosion";
STR_PE_GREENSMOKE = "Green Smoke";
STR_PE_HUGEEXP = "Huge Explosion";
STR_PE_MEDSPLASH = "Medium Splash";
STR_PE_NULL = "null";
STR_PE_REDSMOKE = "Red Smoke";
STR_PE_SILOSTEAM = "Light Steam";
STR_PE_SMLSPLASH = "Small Splash";
STR_PE_SMOKE_COLUMN = "Column of Smoke";
STR_PE_STACKSTEAM = "Heavy Steam";
STR_PE_FLARE = "Flare";
STR_PE_TINYFIRE = "Small Fire";
`,
  "resources/game_strings/medmssn.bin": `'[WPNames]'
STRWPNAME000 = "Null";
STRWPNAME001 = "Alpha";
STRWPNAME002 = "Bravo";
STRWPNAME003 = "Charlie";
STRWPNAME004 = "Delta";
STRWPNAME005 = "Echo";
STRWPNAME006 = "Foxtrot";
STRWPNAME007 = "Golf";
STRWPNAME008 = "Hotel";
STRWPNAME009 = "India";
STRWPNAME010 = "Joker";
STRWPNAME011 = "Kilo";
STRWPNAME012 = "Lima";
STRWPNAME013 = "Mike";
STRWPNAME014 = "November";
STRWPNAME015 = "Oscar";
STRWPNAME016 = "Papa";
STRWPNAME017 = "Quebec";
STRWPNAME018 = "Romeo";
STRWPNAME019 = "Sierra";
STRWPNAME020 = "Tango";
STRWPNAME021 = "Uniform";
STRWPNAME022 = "Victor";
STRWPNAME023 = "Whiskey";
STRWPNAME024 = "X-Ray";
STRWPNAME025 = "Yankee";
STRWPNAME026 = "Zulu";

'[WinConditions]'
STRWINCOND000 = "null";
STRWINCOND001 = "Eliminate all resistance";
STRWINCOND002 = "Find Intel Documents";
STRWINCOND003 = "Eliminate all weapon crates";
STRWINCOND004 = "Reach Final Waypoint";
STRWINCOND005 = "Destroy Technicals";
STRWINCOND006 = "Destroy Radio Equipment";
STRWINCOND007 = "Destroy command center";
STRWINCOND008 = "Destroy communication towers";
STRWINCOND009 = "Stop advancing troops";
STRWINCOND010 = "Eliminate all resistance at the objective";
STRWINCOND011 = "Eliminate enemy helicopters";
STRWINCOND012 = "Destroy weapon emplacements";
STRWINCOND013 = "Sink cargo ship";
STRWINCOND014 = "Destroy bridge";
STRWINCOND015 = "Eliminate perimeter patrols";
STRWINCOND016 = "Sink LCACs";
STRWINCOND017 = "Protect civilians";
STRWINCOND018 = "Protect your squad";
STRWINCOND019 = "Destroy Supply Trucks";
STRWINCOND020 = "Destroy crates at objective";
STRWINCOND021 = "Eliminate all forces at Waypoint Alpha";
STRWINCOND022 = "Eliminate all forces at Waypoint Bravo";
STRWINCOND023 = "Eliminate all forces at Waypoint Charlie";
STRWINCOND024 = "Eliminate all forces at Waypoint Delta";
STRWINCOND025 = "Eliminate all forces at Waypoint Echo";
STRWINCOND026 = "Eliminate all forces at Waypoint Foxtrot";
STRWINCOND027 = "Eliminate all forces at Waypoint Golf";
STRWINCOND028 = "Eliminate all forces at Waypoint Hotel";
STRWINCOND029 = "Eliminate all forces at Waypoint India";
STRWINCOND030 = "Eliminate all forces at Waypoint Joker";
STRWINCOND031 = "Eliminate all forces at Waypoint Kilo";
STRWINCOND032 = "Eliminate all forces at Waypoint Lima";
STRWINCOND033 = "Eliminate all forces at Waypoint Mike";
STRWINCOND034 = "Eliminate all forces at Waypoint November";
STRWINCOND035 = "Eliminate all forces at Waypoint Oscar";
STRWINCOND036 = "Eliminate all forces at Waypoint Papa";
STRWINCOND037 = "Eliminate all forces at Waypoint Quebec";
STRWINCOND038 = "Eliminate all forces at Waypoint Romeo";
STRWINCOND039 = "Eliminate all forces at Waypoint Sierra";
STRWINCOND040 = "Eliminate all forces at Waypoint Tango";
STRWINCOND041 = "Eliminate all forces at Waypoint Uniform";
STRWINCOND042 = "Eliminate all forces at Waypoint Victor";
STRWINCOND043 = "Eliminate all forces at Waypoint Whiskey";
STRWINCOND044 = "Eliminate all forces at Waypoint X-Ray";
STRWINCOND045 = "Eliminate all forces at Waypoint Yankee";
STRWINCOND046 = "Eliminate all forces at Waypoint Zulu";
STRWINMSG000 = "Objective Complete!";
STRWINMSG001 = "All resistance has been eliminated";
STRWINMSG002 = "Intel Documents Found";
STRWINMSG003 = "All weapon crates destroyed!";
STRWINMSG004 = "Waypoint Reached";
STRWINMSG005 = "Technicals Destroyed!";
STRWINMSG006 = "Radio Equipment Destroyed";
STRWINMSG007 = "Command Center Destroyed";
STRWINMSG008 = "Communications Tower Destroyed";
STRWINMSG009 = "Enemy Troops Neutralized";
STRWINMSG010 = "Enemy Forces Destroyed";
STRWINMSG011 = "Enemy Helicopters Destroyed";
STRWINMSG012 = "Weapon emplacements destroyed!";
STRWINMSG013 = "Cargo ship sunk!";
STRWINMSG014 = "Bridge destroyed!";
STRWINMSG015 = "Patrols eliminated!";
STRWINMSG017 = "The civilians are safe!";
STRWINMSG018 = "Your squad has survived!";
STRWINMSG019 = "Supply Trucks Destroyed";
STRWINMSG020 = "Crates Destroyed";
STRWINMSG021 = "Enemy Forces Destroyed";
STRWINMSG022 = "Enemy Forces Destroyed";
STRWINMSG023 = "Enemy Forces Destroyed";
STRWINMSG024 = "Enemy Forces Destroyed";
STRWINMSG025 = "Enemy Forces Destroyed";
STRWINMSG026 = "Enemy Forces Destroyed";
STRWINMSG027 = "Enemy Forces Destroyed";
STRWINMSG028 = "Enemy Forces Destroyed";
STRWINMSG029 = "Enemy Forces Destroyed";
STRWINMSG030 = "Enemy Forces Destroyed";
STRWINMSG031 = "Enemy Forces Destroyed";
STRWINMSG032 = "Enemy Forces Destroyed";
STRWINMSG033 = "Enemy Forces Destroyed";
STRWINMSG034 = "Enemy Forces Destroyed";
STRWINMSG035 = "Enemy Forces Destroyed";
STRWINMSG036 = "Enemy Forces Destroyed";
STRWINMSG037 = "Enemy Forces Destroyed";
STRWINMSG038 = "Enemy Forces Destroyed";
STRWINMSG039 = "Enemy Forces Destroyed";
STRWINMSG040 = "Enemy Forces Destroyed";
STRWINMSG041 = "Enemy Forces Destroyed";
STRWINMSG042 = "Enemy Forces Destroyed";
STRWINMSG043 = "Enemy Forces Destroyed";
STRWINMSG044 = "Enemy Forces Destroyed";
STRWINMSG045 = "Enemy Forces Destroyed";
STRWINMSG046 = "Enemy Forces Destroyed";

'[LoseConditions]'
STRLOSECOND000 = "null";
STRLOSECOND001 = "Player dies";
STRLOSECOND002 = "Friendly forces eliminated";
STRLOSECOND003 = "Friendly helicopters destroyed";
STRLOSECOND004 = "Trucks destroyed";
STRLOSECOND005 = "Transmitter destroyed";
STRLOSECOND006 = "Black Hawk destroyed";
STRLOSECOND007 = "Ground troops eliminated";
STRLOSECOND008 = "Too many casualties";
STRLOSECOND009 = "Operative killed";
STRLOSECOND010 = "Jeeps destroyed";
STRLOSECOND011 = "Bridge destroyed";
STRLOSECOND012 = "Weapon emplacement destroyed";
STRLOSECOND013 = "Communications destroyed";
STRLOSECOND014 = "Cargo ship sunk";
STRLOSECOND015 = "Squad killed";
STRLOSECOND016 = "Relief supplies lost";
STRLOSECOND017 = "Enemy reached waypoint";
STRLOSECOND018 = "Objective not secured in time";
STRLOSECOND019 = "Explosives detonated";
STRLOSECOND020 = "Too many crates destroyed";
STRLOSECOND021 = "Teammate killed";
STRLOSECOND022 = "Little Bird destroyed";
STRLOSECOND023 = "Did not reach objective in time";
STRLOSECOND024 = "Arms shipment destroyed";
STRLOSECOND025 = "Emplaced weapons destroyed";
STRLOSECOND026 = "Too far off course";
STRLOSECOND027 = "Too many civilians killed";
STRLOSECOND028 = "Friendly fire";
STRLOSECOND029 = "Objective not secured";
STRLOSECOND030 = "Waypoint not secured";
STRLOSEMSG000 = "Mission Failed!";
STRLOSEMSG001 = "Mission Failed!
You Died";
STRLOSEMSG002 = "Mission Failed!
Friendly forces eliminated";
STRLOSEMSG003 = "Mission Failed!
Friendly helicopters destroyed";
STRLOSEMSG004 = "Mission Failed!
Trucks destroyed";
STRLOSEMSG005 = "Mission Failed!
Transmitter destroyed";
STRLOSEMSG006 = "Mission Failed!
Black Hawk destroyed";
STRLOSEMSG007 = "Mission Failed!
Ground troops eliminated";
STRLOSEMSG008 = "Mission Failed!
Too many casualties";
STRLOSEMSG009 = "Mission Failed!
Operative Killed";
STRLOSEMSG010 = "Mission Failed!
Jeeps destroyed";
STRLOSEMSG011 = "Mission Failed!
Bridge destroyed";
STRLOSEMSG012 = "Mission Failed!
Weapon emplacement destroyed";
STRLOSEMSG013 = "Mission Failed!
Communications destroyed";
STRLOSEMSG014 = "Mission Failed!
Cargo ship has been sunk";
STRLOSEMSG015 = "Mission Failed!
Squad killed";
STRLOSEMSG016 = "Mission Failed!
Relief supplies lost";
STRLOSEMSG017 = "Mission Failed!
Enemy has reached waypoint";
STRLOSEMSG018 = "Mission Failed!
Objective not secured";
STRLOSEMSG019 = "Mission Failed!
Explosives detonated";
STRLOSEMSG020 = "Mission Failed!
Too many crates destroyed";
STRLOSEMSG021 = "Mission Failed!
Teammate killed";
STRLOSEMSG022 = "Mission Failed!
Little Bird destroyed";
STRLOSEMSG023 = "Mission Failed!
Failed to reach objective";
STRLOSEMSG024 = "Mission Failed!
Arms shipment destroyed";
STRLOSEMSG025 = "Mission Failed!
Emplaced weapons destroyed";
STRLOSEMSG026 = "Mission Failed!
You've gone too far off course";
STRLOSEMSG027 = "Mission Failed!
Too many civilians killed";
STRLOSEMSG028 = "Mission Failed!
You've shot your own team";
STRLOSEMSG029 = "Mission Failed!
Objective not secured";
STRLOSEMSG030 = "Mission Failed!
Waypoint not secured";

'[PeopleNames]'
STRNAME000 = "null";
`,
  "resources/game_strings/medtext.bin": `'[Med Resources]'
N/A = "N/A";
NONE = " None";
NO_AIRBASE = "Error: Aircraft %i needs an Air Base in it's group";

'[Colors]'
ALPHA = "Alpha";
AQUA = "Aqua";
BLACK = "Black";
BLUE = "Blue";
BROWN = "Brown";
CYAN = "Cyan";
DARKRED = "Dark Red";
GRAY = "Gray";
GREEN = "Green";
INDIGO = "Indigo";
LTGRAY = "LtGray";
ORANGE = "Orange";
PURPLE = "Purple";
RED = "Red";
TAN = "Tan";
TEAL = "Teal";
WHITE = "White";
YELLOW = "Yellow";
VIOLET = "Violet";
PINK = "Pink";
MAGENTA = "Magenta";
DARKBLUE = "Dark Blue";
DARKGREEN = "Dark Green";
DARKYELLOW = "Dark Yellow";
INVISIBLE = " Invisible";
NONE = " Default Color";

'[Teams]'
ALLTEAMS = "All teams";
EVILTEAM = "Evil (Red)";
GOODTEAM = "Good (Blue)";
GROUP = "Group";
NEUTRALTEAM = "Neutral (Green)";
VIOLETTEAM = "Violet";
YELLOWTEAM = "Yellow";

'[Map Symbols]'
CIRCLE = "Circle";
FILLEDCIRCLE = "Filled Circle";
DIAMOND = "Diamond";
CROSS = "Cross";
PERSON = "Person";
BOX = "Box";
CIRCLEX = "Circle X";
TRIANGLE = "Triangle";

'[Players]'
BLUE_PLAYERS_CR = " 1 - Blue Players
";
RED_PLAYERS_CR = " 2 - Red Players
";
BLUEPLAYERS = "Blue Players";
REDPLAYERS = "Red Players";

'[Weapons]'
20MMCANNON = "20mm Cannon";
AK47 = "AR - AK47";
AK47_AUTO = "AR - AK47, auto";
AK47_BURST = "AR - AK47, burst";
AK47_SEMI = "AR - AK47, semi";
ARTILLARY = "Artillary";
BL50 = "SR - M82AL Barret Light 50cal";
CALICO = "SMG - Calico";
CALICO_AUTO = "SMG - Calico, auto";
CALICO_BURST = "SMG - Calico, burst";
CALICO_SEMI = "SMG - Calico, semi";
CLAYMORE = "Claymore";
DOUBLE_AMMO = "Double Ammo Load";
EFAMEJECT = "EFAM Eject";
FNMAG = "MG - FN MAG";
G11 = "AR - G11";
G11_AUTO = "AR - G11, auto";
G11_BURST = "AR - G11, burst";
G11_SEMI = "AR - G11, semi";
GHILLIE_SUIT = "Ghillie Suit";
GLOCK = "P - Glock18";
GLOCK_AUTO = "P - Glock18, auto";
GLOCK_SEMI = "P - Glock18, semi";
GRENADE_DELAYED = "Grenade, Delayed";
GRENADE_FRAG = "Grenade, Fragmentation";
H&K_MP5_SD = "SMG - MP5 Suppressed";
HELLFIRE = "Hellfires";
HK_P11 = "P - HK P11 (Underwater Pistol)";
HYDRAROCKETS = "Hydra Rockets";
KEVLAR_VEST = "Kevlar Vest";
KNIFE = "Knife";
LARV = "Rebreather";
M249 = "MG - M249 SAW";
M40A1 = "SR - M40A1";
M4_BURST = "AR - M4, burst";
M4_SEMI = "AR - M4, semi";
M4_SHOTGUN = "AR - M4, shotgun";
MASTER_KEY = "AR - M4 "Master Key"";
MM1 = "GL - MM-1";
MORTAR = "Mortar";
MP5_AUTO = "SMG - MP5, auto";
MP5_BURST = "SMG - MP5, burst";
MP5_SEMI = "SMG - MP5, semi";
NONE = "None";
OICW = "AR - OICW Landwarrior";
OICW_BURST = "AR - OICW, burst";
OICW_GRENADE = "GL - OICW, grenade";
OICW_SEMI = "AR - OICW, semi";
PANCOR = "SG - Pancor "Jackhammer"";
PANCOR_AUTO = "SG - Pancor, auto";
PANCOR_SEMI = "SG - Pancor, semi";
PSG1 = "SR - PSG-1";
ROCKET = "AT4 Shoulder Rocket";
SATCHEL = "Satchel Charge";
SOCOM = "P - SOCOM .45";
SOCOMS = "P - SOCOM .45 Suppressed";
STEYR = "AR - Steyr AUG";
STEYR_BURST = "AR - Steyr AUG, burst";
STEYR_GRENADE = "GL - Steyr AUG, grenade";
STEYR_SEMI = "AR - Steyr AUG, semi";
STINGERPACK = "Stinger Pack";
UAR = "AR - Underwater Rifle";
UAR_AUTO = "AR - Underwater Rifle, auto";
UAR_SEMI = "AR - Underwater Rifle, semi";
UMP = "SMG - UMP";
UMP_AUTO = "SMG - UMP, auto";
UMP_BURST = "SMG - UMP, burst";
UMP_SEMI = "SMG - UMP, semi";

'[Item Type]'
TYPE_BUILDING = "Type: Building";
TYPE_DECORATION = "Type: Decoration";
TYPE_FOLIAGE = "Type: Foliage";
TYPE_MARKER = "Type: Marker";
TYPE_OBJECT = "Type: Object";
TYPE_PERSON = "Type: Person";
TYPE_POWERUP = "Type: Power-up";
TYPE_VEHICLE = "Type: Vehicle";

'[Items]'
SSN = "Social Security Number: %i";

'[Dialog Message]'
20MM_STRING = "20mm Rounds: %d";
ABOUT = "About";
ABOUT_CODER = "Written by Mark Maestas, Pete Sandrene and Trevor Walker";
ABOUT_COPYRIGHT = "Copyright 2002, NovaLogic, Inc.";
ABOUT_HELP = "For details on how to use DFBHDMED, please refer to the DFBHDMED.PDF file.";
ABOUT_MED = "About DFBHDMED
Delta Force: Black Hawk Down
Mission Editor";
ABOUT_VERSION = "Version %s";
ACTION_SUBTYPE = "Action Subtype";
ACTION_TYPE = "Action Type";
ACTION_VARIABLES = "Action Variables";
ACTIVE_AREA = "Active Area";
ADVTEXT = "Fire Timer";
AI_ATTRIBUTES = "AI Attributes";
AI_VARIABLES = "AI Variables";
ALLSSN = "All SSN";
ALWAYS_OFF = "Always OFF";
ALWAYS_ON = "Always ON";
AMMO_MAX = "Ammo amount is higher than the maximum value.  It has been changed to the maximum value.";
AND = "And";
APPLY = "Apply";
AREA_TRIGGERS = "Area Triggers";
AREYOUSURE-S = "Are you sure %s";
ARMORY_ONLY = "Armory ONLY";
ARTIST = "Artist";
ASCII_PARSE = "ASCII Parse";
ATTACK_AND_DEFEND = "Attack && Defend";
AUXILIARY = "Auxiliary";
AWACS_RADAR = "AWACS Radar";
BAD_LINE_NUMBER = "Error in line %i";
BLIND = "Blind";
BONUS_EXPIRATION = "Bonus Expiration";
BREAK_LEFT = "Break Left";
BREAK_RIGHT = "Break Right";
BRIEFING = "Briefing";
BUILDINGS = "Buildings";
CANCEL = "Cancel";
CANTFINDFILE = "Can't find file";
CANT_CANCEL_SUBTYPE = "Once the subtype for the selected objects has been changed, it can not be undone by hitting "Cancel" in the Attributes dialog.  Do you wish to proceed with the change?";
CANT_CREATE_BIN = "Warning: Unable to create briefing file, %s.";
CANT_CREATE_DIB = "Warning: Unable to create DIB for rendering.";
CANT_LOAD_ITEMS_DEF = "Warning: Unable to load file items.def";
CAPTURE_THE_FLAG = "Capture the Flag";
CLASS = "Player Type:";
CLEAR_THIS_MISSION = "Clear this mission?";
CLEAR_THIS_TILESET = "Clear all tiles from the map?";
CLIMB_LADDERS = "Climbs Ladders";
COLOR = "Color";
CONDITION = "Condition:";
CONSUMER = "Consumer";
COOPERATIVE = "Cooperative";
COPY = "Copy";
COPY_EVENT = "Copy Event";
COWARD = "Coward";
CRITICAL = "Critical";
DEAF = "Deaf";
DEATHMATCH = "Deathmatch";
DECORATIONS = "Decorations";
DEFAULT = "Default";
DEFAULT_LAYER = "Default Layer (Always Visible)";
DELAY_MAX = "Delay time is higher than the maximum value.  It has been changed to the maximum delay time.";
DELAY_SEC = "Delay (seconds)";
DELETE = "Delete";
DELETE_ACTION_? = "Do you wish to delete this action?";
DELETE_EVENT = "Delete Event";
DELETE_EVENT_? = "Do you wish to delete this event?";
DELETE_TRIGGER_? = "Do you wish to delete this trigger?";
DESCRIPTION = "Description";
DFMED_TITLE = "DFBHDMED %s %s";
DFMED_TITLE_PLUS_FNAME = "DFBHDMED %s %s - %s";
DIALOG_FILE = "Dialog File (*.dbf)";
DIRECTION = "Wind Direction";
DISTANCE = "Distance";
EDITCOLORS = "editColors";
EDITGROUPS = "editGroups";
EDITWAYPOINTS = "editWaypoints";
EFAMS_STRING = "EFAMS (%s)";
EFFECTS = "Effects";
ELEVATION = "Elevation";
EQUAL = "=";
EQUALS = "equals";
ERROR = "ERROR";
ERROR_NAMETOOLONG = "The filename you have entered is too long.  With the extension, it must be less than 32 characters.  Please shorten the name and try again.";
EVENTS = "Events";
EVENT_ACTION = "Event Action";
EVENT_DOWN = "Down";
EVENT_TRIGGER = "Event Trigger";
EVENT_UP = "Up";
EXIT = "Exit";
EXPLOSIVES = "Explosives";
FACING = "Facing";
FALSE = "False";
FIND = "Find";
FIRE_MISSIONS_AVAILABLE = "Air Strikes Available";
FLAGBALL = "Flagball";
FOG_COLOR = "Fog Color";
FOG_LEVEL = "Fog Distance (m)";
FOLIAGE = "Foliage";
FOV = "Field Of View";
GENERALINFO = "GeneralInfo";
GENERAL_INFORMATION = "General Information";
GEOM_ZERO = "Some items have geometry that lie below zero";
GETCENTER = "GetCenter";
GET_CENTER = "Get Center";
GROUP = "Group";
GROUPS = "Groups";
GUARDING = "Guarding";
HARDPOINT_STRING = "Free Hardpoints: %.2d";
HEADING = "Heading (0 = North)";
HEIGHT = "Height";
HELLFIRE = "Hellfire";
HELLFIRES = "Hellfires";
HIDE_ALL = "Hide All";
HIDE_NOEVENT_SSN = "Only Show SSNs with Events Attached";
HOVERING = "Hovering (Helicopters Only)";
HYDRA = "Hydra";
HYDRAS = "Hydras";
IF_TRIGGERS = "IF ( Triggers )";
IGNORE_FOOTSTEPS = "Ignore Footsteps";
IGNORE_GUNSHOTS = "Neutral Targeting";
IGNORE_YELLS = "Guided Ammo";
INDESTRUCTABLE = "Indestructable";
INSERTITEM = "InsertItem";
INSERT_ITEM = "Insert Item";
INTEGRITYCHECK = "IntegrityCheck";
ITEMATTRIB = "Item Attributes";
ITEM_COLORS = "Item Colors";
KING_OF_THE_HILL = "King of the Hill";
LASER_DESIGNATOR = "Laser Designator";
LAYER = "Layer";
LAYERNAME = "%2i - (unnamed)";
LAYERNAMES = "LayerNames";
LAYER_NAMES = "Layer Names";
LAYER_VISIBILITY = "Layer Visibility";
LENGTH = "Length";
LESS_THAN = "Less Than...";
LIKETOSAVE-S = "Would you like to save this mission (%s)?";
LIST = "List";
LOADING... = "Loading %s. . .";
LOADINGMODELS = "Loading models";
LOADOUT_RESTRICT = "Loadout Restrictions";
LOADOUT_SP = "Default Loadout (Single Player ONLY)";
LOGIC = "Logic";
LONG_BRIEFING = "Long Briefing";
LOSE_CONDITION = "Lose Conditions";
LWMED_TITLE = "DF2: Land Warrior MED: %s %s";
LWMED_TITLE_PLUS_FNAME = "DF2: Land Warrior MED: %s %s - %s";
MAP_SYMBOL = "Map Symbol";
MAP_TYPES = "Map Types";
MAP_ZOOM = "Starting Spin-map Zoom";
MARKERS = "Markers";
MAX = "Close in";
MAXATTACKDIST = "Max Attack Distance";
MAXDIST = "Max Engagement Distance";
MAX_NUM_AREA_TRIGGERS = "Exceeded Maximum Number of Area Triggers";
MAX_NUM_WAYPOINTS = "Exceeded Maximum Number of Waypoints";
MAX_SAVES = "Max Saved Games";
MED = "Med";
MEDFLY = "Med Helpers";
MILMED_TITLE = "MILMED %s";
MILMED_TITLE_PLUS_FNAME = "MILMED %s - %s";
MIN = "Far out";
MINDIST = "Min Engagement Distance";
MISC = "Misc.";
MISSION_AREA = "Designated Mission Area";
MISSION_CRITICAL_ITEM = "Mission Critical Item";
MISSION_DESIGN = "Mission Design";
MISSION_DESIGNER = "Mission Designer";
MISSION_FILE = "Mission File (*.rc)";
MISSION_NAME = "Mission Name";
MISSION_TERRAIN = "Mission Terrain";
MISSION_TTILE = "Mission Tiles";
MORE_THAN = "More Than...";
MULTIPLAYER = "Multiplayer";
NAME = "Name";
NAVIGATION_WAYPT = "Navigation Waypoint";
NEXTSSN = "Next SSN";
NIGHT = "Night";
NONE = " None";
NOTICE = "Notice";
NO_SETUPCD = "File: setup.cd not found";
NO_WATER = "Afraid To Swim";
NPC_WEAPON = "NPC Primary Weapon";
NULL = "null";
NUMBER = "Number";
NUMERICMC = "NumericMC";
NVG_AVAILABLE = "Night Vision Goggles Available";
NVG_START_ON = "Start with NVG Turned On";
OBJECTS = "Objects";
OFF = "Off";
OK = "OK";
OMED_TITLE = "OMED %s";
OMED_TITLE_PLUS_FNAME = "OMED %s - %s";
ON = "On";
OPENNING_READONLY = "Warning: File ( %s ) is READ-ONLY.  Any changes will NOT be saved.";
OR = "Or";
PASTE = "Paste";
PASTE_EVENT = "Paste Event";
PENAME = "Particle Effect Name:";
PEOPLE = "People";
PERCEPTION = "Perception";
PITCH = "Pitch (90 = up)";
PLAYERS = "Players";
POSITION = "Position";
POST_MISSION_EVENT = "Post-Mission Event";
POWERUP = "Power-ups";
PRE_MISSION_EVENT = "Pre-Mission Event";
PRIMARY = "Primary";
PRINT_ALL = "Print All Events";
PRINT_EVENT = "Print Event";
PRINT_LIST = "Save As...";
PRONE = "Prone";
RANDOM_FACING = "Random Facing";
REMOVE_IF = "Remove If...";
RESET_AFTER = "Reset after (seconds)";
ROLLS_OVER = "Rolls Over";
ROTATE180 = "Rotate Map 180 degrees";
ROTATION = "Rotation: %i degrees";
ROTATION_AMOUNT = "Rotation:";
SAVED_AND_EXPORTED = "Mission saved and exported successfully";
SAVE_CHARACTER_MAP? = "Do you wish to save changes to the character map?";
SAVE_CHAR_INFO = "Would you like to save your char tiler info.";
SAVE_PAGE_1? = "Do you wish to save Page 1?";
SCORE = "Score";
SEARCH_AND_DESTROY = "Search && Destroy";
SECONDARY = "Secondary";
SELECTSSN = "Select Items";
SELECT_MARKERS = "Select Markers";
SELECT_MEMBERS = "Select Members";
SHINEBOX = "Area Info";
SHOW_ALL = "Show All";
SIDEARM = "Sidearm";
SILENT = "Strong Silent Type";
SIZE = "Size %i";
SKY_SETTINGS = "Sky Settings";
SMOKETIME_MAX = "Smoke Time is set higher than the maximum possible value for the selected item.  It has been changed to the maximum value.";
SOLDIER_ONE_WEAPON = "Warning: Soldiers will only use one type of weapon in addition to grenades, even if they have ammo for several weapons.";
SOUNDRC_CANT_OPEN = "Warning: Can't open sound resource file";
SOUNDRC_NO_SCRIPTS = "Warning: No scripts found in sound resource file";
SOUNDRC_OUT_OF_MEMORY = "Warning: Not enough memory to load sound resource file";
SPEED_KPH = "Wind Speed (kph)";
SPINMAP_OVERRIDE = "Spinmap Color Override";
STANDING = "Standing";
STATUS = "Status";
STATUSDIALOG = "StatusDialog";
STINGER = "Stinger";
STINGERS = "Stingers";
SUBTYPE = "Sub-Type:";
SUN = "Enviroment File:";
TEAM = "Team";
TEAMMATE_PRIMARY = "Primary Teammate";
TEAMMATE_SECONDARY = "Secondary Teammate";
TEAM_DEATHMATCH = "Team Deathmatch";
TEAM_KING_OF_THE_HILL = "Team King of the Hill";
TELEPORTTARGETS = "Teleport Targets";
TERRAIN_OVERRIDES = "Mission Overrides";
TEXTRC_CANT_OPEN = "Warning: Can't open text message resource file";
TEXTRC_NO_MSGS = "Warning: No messages found in text message resource file";
TEXTRC_OUT_OF_MEMORY = "Warning: Not enough memory to load text resource file";
THEN_ACTIONS = "THEN ( Actions )";
TOO_MANY_AREA_TRIGGERS = "Cannot have more than %i area triggers";
TOO_MANY_DECOR = "The total number of Decorations and Buildings (%i) exceeds the maximum (%i)";
TOO_MANY_ITEMS = "The total number of Vehicles and Objects (%i) exceeds the maximum (%i)";
TOO_MANY_MARKERS = "The total number of Markers (%i) exceeds the maximum (%i)";
TOO_MANY_MITEMS = "The total number of  Vehicles (%d) exceeds the maximum (%d)";
TOO_MANY_OPLUSMITEMSNET = "The total number of People + Vehicles (%d) exceeds the maximum (%d) for net play";
TOO_MANY_ORGANICS = "The total number of People (%i) exceeds the maximum (%i)";
TOO_MANY_WAYPOINTS = "Cannot have more than %i waypoints in a group";
TRIGGER_CONDITION = "Trigger Condition";
TRIGGER_IF = "Trigger if:";
TRIGGER_TYPE = "Trigger Type";
TRIGGER_VARIABLES = "Trigger Variables";
TRUE = "True";
TYPE = "Type";
UNKNOWN_ITEMS = "Unknown Items (%i)";
VEHICLES = "Vehicles";
VISIBLELAYERS = "VisibileLayers";
VISIBLE_CAMP_VARS = "Visible Campaign Variables";
VISIBLE_LAYERS = "Visible Layers";
VOLUME_TRIGGER = "3D Volume Trigger";
WARNING = "Warning";
WATER_LEVEL = "Water Level (x0.5 m)";
WAVLISTS = "WavLists";
WAYPOINTNAMES = "WaypointNames";
WAYPOINTS = "Waypoints";
WAYPOINT_BLUE = "Blue Team Waypoint";
WAYPOINT_NOLOOP = "Waypoint does NOT loop";
WAYPOINT_RED = "Red Team Waypoint";
WEAPON = "Weapon";
WEAPONS_ARMORY = "All Weapons Available in Armory";
WEAPONS_OFF = "All Weapons Off";
WEAPONS_ON = "All Weapons On";
WEAPON_ACCURACY1 = "Weapon Accuracy 1";
WEAPON_ACCURACY2 = "Weapon Accuracy 2";
WEAPON_STRING = "%.2d %s";
WEATHER = "Weather";
WIND = "Wind";
WIN_CONDITION = "Win Conditions";
WP_ADVANCEMENT_Event = "Advancement Event";
WP_EVENT_DELETED = "Waypoint %d-%d (SSN %d) referenced the event that was just deleted.  This waypoint's 'advancement trigger' reference will now be removed.";
XOR = "X-or";
X_COORD = "X:";
Y_COORD = "Y:";
Z_COORD = "Z:";

'[Triggers]'
000_NULL = "000 - Null";
0_UNITS_LEFT = "0 Units Left";
1_UNIT_LEFT = "1 Unit Left";
2_UNITS_LEFT = "2 Units Left";
3_UNITS_LEFT = "3 Units Left";
4_UNITS_LEFT = "4 Units Left";
ABOVE = "Above";
ACCURACY = "Accuracy";
ACCURACY_100 = "Accuracy (100ths)";
ACCURACY_TO = " accuracy to %i";
ACTIVE = "Active";
ADD_VARIABLE = "Increment Variable";
ADVANCE_TYPE = "Advance Type";
AI = "AI";
AIAIMSKILL_TO = " gunner skill is %s";
AICLEARWPZ = "Stop Using Waypoint Z";
AICLEARWPZ_TO = " stop using waypoint Z";
AICOMBAT_TO = " combat speed = %d km/h";
AIDRIVESKILL_TO = " driver skill is %s";
AIMSKILL = "Gunner's Skill Level";
AINODEPATH = "Autonomous Behavior";
AINODEPATH_BIT = "Autonomous Behavior";
AINODEPATH_OFF = " do not use Autonomous Behavior";
AINODEPATH_ON = " use Autonomous Behavior";
AIPATROL_TO = " patrol speed = %d km/h";
AIR_UNIT = "Air Unit";
AISETSTATE = "AI State";
AISTATE = "AI State";
AISTATE_TO = " AI state to %s";
AITARGET_TO = " target SSN %d";
AIUSEWPZ = "Use Waypoint Z";
AIUSEWPZ_TO = " use waypoint Z";
ALIVE = "Alive";
ALIVE = "Alive";
ALL_DESTROYED = "All Destroyed";
ALL_INTACT = "All Intact";
ANGLE = "Angle";
ANIMNUM = "Animation Number";
ANIMPLAYTYPE = "Animation Action";
ANIMTIME = "Animation Time";
ANY_ALIVE = "Any Alive";
AREA = "Area";
AREA_AI_BLUE = "Change AI in Area, Blue";
AREA_AI_RED = "Change AI in Area, Red";
AREA_ID = "Area ID";
AREA_NUMBER = "Area %i";
AREA_TRIGGER = "Area Trigger";
ATTACH_TO_EMPLACED = "Attach SSN To Emplaced Weapon";
ATTACH_TO_EMPLACED_TO = "Attach SSN %d to nearest emplaced weapon";
ATTACK = "Attack";
ATTACKDISTANCE = "Attack Distance";
ATTACKDISTANCE_VALUE = "Attack Distance (meters)";
ATTACKED = "Attacked";
ATTACK_DISTANCE_TO = " set Attack Distance to %d";
ATTENTION_SPAN = "Attention Span";
ATTENTION_SPAN_TO = " attention span to %i seconds";
AT_START = "At Start";
AUDIO_SCRIPT = "Audio Script";
BEEN_IN_AREA = "Has Been In Area";
BELOW = "Below";
BERSERK = "Berserk";
BERSERK_BIT = "Berserk (0 or 1)";
BERSERK_OFF = " not berserk";
BERSERK_ON = " berserk";
BIT_0 = "Bit 0";
BIT_1 = "Bit 1";
BIT_2 = "Bit 2";
BIT_3 = "Bit 3";
BIT_4 = "Bit 4";
BIT_5 = "Bit 5";
BIT_6 = "Bit 6";
BIT_7 = "Bit 7";
BLIND = "Blind";
BLIND_BIT = "Blind (0 or 1)";
BLIND_OFF = " not blind";
BLIND_ON = " blind";
BLUE = "Blue";
BLUE_WIN = "Win, Blue";
CALL_AIR_SUPPORT = "Call Air Support";
CALL_AIR_SUPPORT_TO = "Call Air Support To";
CALL_ARTILLERY = "Call Artillery";
CAMPAIGN = "Campaign";
CAMPAIGN-NULL = "Campaign - Null";
CAMPAIGN_FLAG = "CampFlag";
CAMPAIGN_MISSIONS_PLAYED_EQ = "Campaign: missions played = %i";
CAMPAIGN_MISSIONS_PLAYED_GT = "Campaign: missions played > %i";
CAMPAIGN_MISSIONS_PLAYED_LE = "Campaign:missions played <= %i";
CAMPAIGN_MISSIONS_PLAYED_NE = "Campaign: missions played <> %i";
CAMPAIGN_MISSIONS_WON_EQ = "Campaign: missions won = %i";
CAMPAIGN_MISSIONS_WON_GT = "Campaign: missions won > %i";
CAMPAIGN_MISSIONS_WON_LE = "Campaign: missions won <= %i";
CAMPAIGN_MISSIONS_WON_NE = "Campaign: missions won <> %i";
CAMPAIGN_TIME = "Campaign Time";
CAMPAIGN_TIME_GE = "Campaign: time >= %i minutes";
CAMPAIGN_TIME_LT = "Campaign Time < %i minutes";
CAMPAIGN_VARIABLE_NOT_SET = "Campaign variable %i has not been set";
CAMPAIGN_VARIABLE_SET = "Campaign variable %i has been set";
CHANGE_ALL_BLUE_IN_AREA = "Change all Blue AI in area %i : %s";
CHANGE_ALL_RED_IN_AREA = "Change all Red AI in area %i : %s";
CHANGE_GROUP = "Change Group %i AI : %s";
CHANGE_GROUP_ACTION = "Change Group, Group";
CHANGE_GROUP_AI = "Change AI, Group";
CHANGE_GROUP_STRING = "Change Group %i to Group %i";
CHANGE_GTEAM_ACTION = "Change Team, Group";
CHANGE_GTEAM_STRING = "Change Group %i to Team ";
CHANGE_SINGLE = "Change SSN %d AI : %s";
CHANGE_SINGLE_AI = "Change AI, Single";
CHANGE_SINGLE_STRING = "Change SSN %i to group %i";
CHANGE_STEAM_ACTION = "Change Team, SSN";
CHANGE_STEAM_STRING = "Change SSN %i To Team ";
CLEAR = "Clear";
CLIMBER = "Climber";
CLIMBER_BIT = "Climber (0 or 1)";
CLIMBER_OFF = " not a climber";
CLIMBER_ON = " climber";
COLON_NULL = ": null";
COMBATSPEED = "Combat Speed";
COMMA_FIVE = ", 5";
COMMA_FOUR = ", 4";
COMMA_ONE = ", 1";
COMMA_SEVEN = ", 7";
COMMA_SIX = ", 6";
COMMA_THREE = ", 3";
COMMA_TWO = ", 2";
COMPLETED = "Completed";
CONDITION_RED = "Condition Red";
CONDITION_YELLOW = "Condition Yellow";
CONVOY_REDIRECT = "Redirect Convoy #%i to waypoint list %i";
COWARD = "Coward";
COWARD_BIT = "Coward (0 or 1)";
COWARD_OFF = " uncowardly";
COWARD_ON = " cowardly";
CROUCH_TIMER = "Crouch Timer";
CROUCH_TIMER_TO = " crouch timer to %i seconds";
CURRENT_UNIT = " Current Unit ";
DAMAGE = "Damage";
DAMAGED = "Damaged";
DEAD = "Dead";
DEAF = "Deaf";
DEAFGUNS = "Target Neutrals";
DEAFGUNS_BIT = "Target Neutrals (0 or 1)";
DEAFGUNS_ON = " do target neutrals";
DEAFSTEPS = "Deaf to footsteps";
DEAFSTEPS_BIT = "Deaf to footsteps (0 or 1)";
DEAFSTEPS_OFF = " hear footsteps";
DEAFSTEPS_ON = " deaf to footsteps";
DEAFYELLS = "Guided Ammo";
DEAFYELLS_BIT = "Guided Ammo (0 or 1)";
DEAF_BIT = "Deaf (0 or 1)";
DEAF_OFF = " not deaf";
DEAF_ON = " deaf";
DECREMENT_VARIABLE = "Decrement Variable by 1";
DESTROY = "Destroy";
DESTROYED = "Destroyed";
DISPLAY_TEXT = "Display text %s";
DISTANCE = "Distance (m)";
DISTANCE_TO = "Distance To";
DRIVESKILL = "Driver's Skill Level";
ELAPSED_TIME = "Elapsed Time";
ENCOUNTERS = "Encounters";
END = "End";
ENEMY = "Enemy";
ENGAGEDISTANCE = "Engagement Range";
ENGAGEDISTANCE_MAXVALUE = "Max Engagement Distance (meters)";
ENGAGEDISTANCE_MINVALUE = "Min Engagement Distance (meters)";
ENGAGE_DISTANCE_TO = " engagement range (%dm - %dm)";
EQUALS = "Equals";
EVENT = "Event";
EVENT_ACTIONS = "EventActions";
EVENT_NOT_TRIGGERED = "Event %i has not been triggered";
EVENT_NUM = "Event %i";
EVENT_NUMBER_STRING = "Event Number";
EVENT_TRIGGERED = "Event %i has been triggered";
EVENT_TRIGGERS = "EventTriggers";
EXECUTE_WAC = "Execute WAC";
FACING = "Facing";
FARTHER = "Farther";
FEET = "Feet";
FIELD_OF_VIEW = "Field of View";
FIND_AND_USE = "Find and Use SSN";
FIND_AND_USE_SSN = "Find and Use SSN %d";
FIVE = "5";
FLAG = "Flag";
FLAG-NULL = "Flag - Null";
FLAGS_EQ = "CTF Flags =";
FLAG_AT_START = "At the start of the mission";
FLAG_IS_NOT_SET = "Flag #%i is FALSE";
FLAG_IS_NOT_SINGLE_PLAYER = "This is not a single player game";
FLAG_IS_SET = "Flag #%i is TRUE";
FLAG_IS_SINGLE_PLAYER = "This is a single player game";
FLAG_NOT_AT_START = "Not at the start of the mission";
FLAG_SAVE_TRIGGER = "Save (reset) the current event triggers";
FLAG_SET_FALSE = "Set Flag #%i to FALSE";
FLAG_SET_TRUE = "Set Flag #%i to TRUE";
FLAG_XOR = "Toggle Flag #%i";
FLATTEN = "Flatten";
FORMATION = "Formation";
FOUR = "4";
FOV_DEGREES = "fov (degrees)";
FRIENDLY = "Friendly";
FULL_HP = "Full Health";
GOALS_EQ = "Goals =";
GOALS_REMAINING_EQ = "Goals Remaining =";
GOALS_REMAINING_GT = "Goals Remaining >";
GOAL_STATUS_ACTIVE = "active";
GOAL_STATUS_COMMA_COMPLETED = ", completed";
GOAL_STATUS_COMMA_NOTCOMPLETE = ", not completed";
GOAL_STATUS_INACTIVE = "in-active";
GREATER_THAN = "Greater Than";
GREATER_THAN_EQUAL = "Greater Than or Equal To";
GREEN_ALERT = "Green Alert";
GREEN_WIN = "Win, Green (Neutral)";
GROUP = "Group";
GROUP-NULL = "Group - null";
GROUP1 = "Group 1";
GROUP2 = "Group 2";
GROUP_ALIVE = "Group %i is still alive";
GROUP_ATTACKED = "Group %i has been attacked";
GROUP_AT_RED_ALERT = "Group %i is at red alert";
GROUP_AT_WAYPOINT = "Group %i reaches waypoint %i, %i";
GROUP_AT_YELLOW_ALERT = "Group %i is at yellow alert";
GROUP_CLOSE_DOOR_ACTION = "Close Doors, Group";
GROUP_CLOSE_DOOR_STRING = "Close all doors in Group %d";
GROUP_DAMAGED_MORE_THAN = "Group %i has been damaged %i%% or more";
GROUP_DESTROYED = "Group %i has been destroyed";
GROUP_ELIMINATE = "Destroy all members of group %i randomly within 4 seconds";
GROUP_FINISH_WP_LIST = "Group %i finishes waypoint list";
GROUP_HAS_LOST = "Group %i has lost %i units";
GROUP_HAS_LOST_MORE_UNITS = "Group %i has lost %i or more units";
GROUP_HAS_MORE_UNITS = "Group %i has %i or more units";
GROUP_HAS_NOT_LOST = "Group %i has not lost %i units";
GROUP_HAS_NOT_LOST_MORE_UNITS = "Group %i has not lost %i or more units";
GROUP_HAS_NOT_SHOT_GROUP = "Group %i has not shot Group %i";
GROUP_HAS_NOT_SHOT_SINGLE = "Group %i has not shot SSN %i";
GROUP_HAS_NOT_TARGETED_GROUP = "Group %i has not targeted Group %i";
GROUP_HAS_NOT_TARGETED_SINGLE = "Group %i has not targeted SSN %i";
GROUP_HAS_SHOT_GROUP = "Group %i has shot Group %i";
GROUP_HAS_SHOT_SINGLE = "Group %i has shot SSN %i";
GROUP_HAS_TARGETED_GROUP = "Group %i has targeted Group %i";
GROUP_HAS_TARGETED_SINGLE = "Group %i has targeted SSN %i";
GROUP_HOLDING_GROUP = "Group %i holds Group %i";
GROUP_HOLDS_ITEM = "Group Holds Item";
GROUP_INTACT = "Group %i is all intact";
GROUP_IS_NOT_WITHIN_AREA = "Group %i is not within area %i";
GROUP_IS_WITHIN_AREA = "Group %i is within area %i";
GROUP_LESS_THAN = "Group %i has less than %i units";
GROUP_NOT_ALIVE = "Group %i has been destroyed";
GROUP_NOT_ATTACKED = "Group %i has not been attacked";
GROUP_NOT_AT_RED_ALERT = "Group %i is not at red alert";
GROUP_NOT_AT_WAYPOINT = "Group %i has not reached waypoint %i, %i";
GROUP_NOT_AT_YELLOW_ALERT = "Group %i is not at yellow alert";
GROUP_NOT_DAMAGED_MORE_THAN = "Group %i has been damaged less than %i%%";
GROUP_NOT_DESTROYED = "Group %i has not been destroyed";
GROUP_NOT_FINISH_WP_LIST = "Group %i has not finished waypoint list";
GROUP_NOT_HOLDING_GROUP = "Group %i does not hold Group %i";
GROUP_NOT_INTACT = "Group %i is not all intact";
GROUP_NOT_ON_GROUPS_RADAR = "Group %i is not on Group %i's radar";
GROUP_NOT_ON_RADAR = "Group %i is not on enemy radar";
GROUP_NOT_SEES_GROUP = "Group %i does not see Group %i";
GROUP_NOT_SEES_SINGLE = "Group %i does not see SSN %i";
GROUP_NOT_WITHIN_AREA = "Group %i is not within area %i";
GROUP_ON_GROUPS_RADAR = "Group %i is on Group %i's radar";
GROUP_ON_RADAR = "Group %i is on enemy radar";
GROUP_OPEN_DOOR_ACTION = "Open Doors, Group";
GROUP_OPEN_DOOR_STRING = "Open all doors in Group %d";
GROUP_REDIRECT_TO = "Redirect group %i to nearest waypoint in list %i";
GROUP_REDIRECT_TO_POINT = "Redirect group %i to waypoint %i - %i";
GROUP_RESET_HASVISITED = "Reset Has Visited Flags, Group";
GROUP_RESET_HASVISITED_TO = "Reset waypoints Group %d has visited";
GROUP_SEES_GROUP = "Group %i sees Group %i";
GROUP_SEES_SINGLE = "Group %i sees SSN %i";
GROUP_TARGET_GROUP_EXC = "Target Group by Group, Exclusive";
GROUP_TARGET_GROUP_EXC_STR = "Group %d exclusively target Group %d";
GROUP_TARGET_GROUP_PRI = "Target Group by Group, Priority";
GROUP_TARGET_GROUP_PRI_STR = "Group %d prioritize target Group %d";
GROUP_TARGET_SSN_EXC = "Target SSN by Group, Exclusive";
GROUP_TARGET_SSN_EXC_STR = "Group %d exclusively target SSN %d";
GROUP_TARGET_SSN_PRI = "Target SSN by Group, Priority";
GROUP_TARGET_SSN_PRI_STR = "Group %d prioritize target SSN %d";
GROUP_TELEPORT_ACTION = "Teleport Group";
GROUP_TELEPORT_STRING = "Teleport group %i to target %i";
GROUP_VAPORIZE = "Destroy all members of group %i immediately";
GROUP_VELOCITY = "Velocity, Group";
GROUP_WITHIN_AREA = "Group %i is within area %i";
GUARDER = "Guard Bit";
GUARD_BIT = "Guard ( 0 or 1)";
GUARD_OFF = " do not guard";
GUARD_ON = " guard";
HAS_LOST = "Has lost";
HAS_X_HP = "Has X Health";
HAS_X_UNITS = "Has X Units";
HIDE_LOSE_SUBGOAL_TO = "Hide Lose Subgoal %d";
HIDE_WAYPOINTS_TO = "Hide Waypoints";
HIDE_WIN_SUBGOAL_TO = "Hide Win Subgoal %d";
HIT_POINTS = "Hit points";
HOLDS_ITEM = "Holds Item";
HUDITEM = "HUD Item";
IGNORE = "Ignore";
INCREMENT_VARIABLE = "Increment Variable by 1";
INDESTRUCTABLE = "Indestructable";
INDESTRUCTABLE_BIT = "Indestructable (On/Off)";
INDESTRUCTABLE_OFF = " destroyable";
INDESTRUCTABLE_ON = " indestructable";
INTACT = "Intact";
INVALID_ACTION = "INVALID ACTION";
INVALID_TRIGGER = "INVALID TRIGGER";
IN_AREA = "In Area";
IN_AREA = "In Area";
IN_RADAR = "In Radar";
IS_ODD_TIME_PLAYED = "Is Odd Numbered Time Played";
IS_SET = "Flag Is Set";
IS_SINGLE_PLAYER_GAME = "Is Single Player Game";
IS_TARGETED = "Is Targeted";
ITEM_GROUP = "Item Group";
KILL_GROUP = "Kill Group";
KILL_GROUP_X = "Kill Group %i";
KILL_SINGLE = "Kill SSN";
KILL_SINGLE_X = "Kill SSN %i";
KNOTS = "Knots";
LAST_UNIT_WAYPT = "Last Unit Reached Waypoint";
LESS_THAN = "Less Than";
LESS_THAN_EQUAL = "Less Than or Equal To";
LOCKED_TARGET = "Locked Target";
LOSE = "Lose";
LOST_X_HP = "Lost X Health";
LOST_X_UNITS = "Lost X Units";
MARKER = "Marker";
MESSAGE = "Message";
MESSAGE-NULL = "Message - null";
MESSAGE_AUDIO_SCRIPT = "Play audio script: "%s"";
MESSAGE_PLAY_WAV = "Play wav: "%s"";
MESSAGE_TEXT_MSG = "Display message: "%s"";
MISSIONS_PLAYED_EQ = "Missions Played =";
MISSIONS_PLAYED_GT = "Missions Played >";
MISSIONS_WON_EQ = "Missions Won =";
MISSIONS_WON_GT = "Missions Won >";
MISSION_CRITICAL = "[Mission Critical]";
MISSION_FLAG = "Mission Flag";
MISSION_OBJECTIVE = "Mission Objective";
MISSION_OBJECTIVE-NULL = "Mission Objective - null";
MISSION_RESULT = "Mission Result";
MISSION_RESULT-NULL = "Mission Result - null";
MISSION_RESULT_LOSE = "Blue Team LOSES";
MISSION_RESULT_WIN = "Blue team WINS";
MISSION_TIME = "Mission Time";
MISSION_TIME_MORE_THAN = "Mission time is more than %i seconds";
MISSION_TIME_NOT_MORE_THAN = "Mission time is less than %i seconds";
MISSION_VARIABLE = "Mission Variable";
MISVAR-NULL = "Mission Variable - Null";
MISVAR_ADD = "Increment Mission Var#%i by %i";
MISVAR_CHANGE = "Change Mission Variable";
MISVAR_DEC = "Decrement Mission Var#%i by 1";
MISVAR_INC = "Increment Mission Var#%i by 1";
MISVAR_IS_EQUAL = "Mission Var#%i is equal to %i";
MISVAR_IS_GT = "Mission Var#%i is greater than %i";
MISVAR_IS_GTE = "Mission Var#%i is greater than or equal to %i";
MISVAR_IS_LT = "Mission Var#%i is less than %i";
MISVAR_IS_LTE = "Mission Var#%i is less than or equal to %i";
MISVAR_IS_NOT_EQUAL = "Mission Var#%i is not equal to %i";
MISVAR_SET = "Set Mission Var#%i to %i";
MISVAR_SUB = "Decrement Mission Var#%i by %i";
MOVE_TIMER = "Move Timer";
MOVE_TIMER_TO = " move timer to %i seconds";
NEARER = "Nearer";
NEAREST = "Nearest";
NEUTRAL = "Neutral";
NEW_ACTION = "<< New Action >>";
NEW_EVENT = "<< New Event >>";
NEW_TRIGGER = "<< New Trigger >>";
NEW_WEAPON = "New Weapon";
NONE_AVAILABLE = "No items of this type have been placed";
NOT_FACING = "Not Facing";
NOT_SECOND_TIME_THROUGH = "Odd Numbered Time Playing";
NO_WATER = "No Water";
NO_WATER_BIT = "No Water (0 or 1)";
NO_WATER_OFF = " likes water";
NO_WATER_ON = " does not like water";
NULL = " Null";
NUMBER = "Number";
NUMPADKEY = "Numpad Key";
NUM_HITS = "Num Hits";
NUM_UNITS = "Num Units";
OBLIQUENESS = "Obliqueness";
OBLIQUENESS_DEGREES = "Obliqueness (degrees)";
OBLIQUENESS_TO = " obliqueness to %i degrees";
ONE = "1";
OUTPUT_TEXT = "Output Text";
OVERRIDE_TIMER = "Override Timer";
PARTICLE_EFFECT = "Particle Effect";
PARTICLE_EFFECT_ACTION = "Create Particle Effect";
PARTICLE_EFFECT_STRING = "Create particle effect at teleport target %d";
PATROLSPEED = "Patrol Speed";
PEND = "Pend";
PEND_SOUND = "Play %s after channel has been clear for %i seconds";
PERCENT = "Percent";
PERCEPTION = "Perception";
PERCEPTION_100 = "Perception (100ths)";
PERCEPTION_TO = " perception to %i";
PERSON = "Person";
PLAY = "Play";
PLAYER = "Player";
PLAYER-NULL = "Player - null";
PLAYER_1STPERSON = "Player is in 1st-person View";
PLAYER_1STPERSON_NOT = "Player is not in 1st-person view";
PLAYER_1STPERSON_TEST = "View, 1st Person No Weapon";
PLAYER_3RDPERSON = "Player is in 3rd-person view";
PLAYER_3RDPERSON_NOT = "Player is not in 3rd-person view";
PLAYER_3RDPERSON_TEST = "View, 3rd Person";
PLAYER_ACTION = "Perform Player Action";
PLAYER_ACTION_STRING = "%s";
PLAYER_AWOL = "Player has been outside of mission area for %d seconds";
PLAYER_AWOL_NOT = "Player has not been outside of mission area for %d seconds";
PLAYER_AWOL_TEST = "Outside of Mission Area";
PLAYER_BERSERK = "Player is berserk";
PLAYER_BERSERK_NOT = "Player is not berserk";
PLAYER_BERSERK_TEST = "Berserk";
PLAYER_CLEARINPUT = "Clear Input Tests";
PLAYER_CLEARINPUT_STRING = "clear input test buffer";
PLAYER_COCKPITVIEW = "Player is in 1st-Person Weapon view";
PLAYER_COCKPITVIEW_NOT = "Player is not in 1st-Person Weapon view";
PLAYER_COCKPITVIEW_TEST = "View, 1st-Person Weapon";
PLAYER_DLGDONE = "%s is not currently playing";
PLAYER_DLGDONE_NOT = "%s is currently playing";
PLAYER_DLGDONE_TEST = "Dialog Playing";
PLAYER_DLGFINISHED = "%s is finished playing";
PLAYER_DLGFINISHED_NOT = "%s is not finished playing";
PLAYER_DLGFINISHED_TEST = "Dialog Finished";
PLAYER_HUDFLASH = "Flash Hud Item";
PLAYER_HUDFLASH_STRING = "flash hud %s for %d ticks";
PLAYER_SATCHEL = "Player placed a satchel in Area %d";
PLAYER_SATCHEL_NOT = "Player has not placed a satchel in Area %d";
PLAYER_SATCHEL_TEST = "Placed Satchel in Area";
PLAYER_STARTUP = "Player Startup";
PLAYER_STARTUP_STRING = "start player engines";
PLAYER_TMATETOGGLE = "Teammate Command Toggle";
PLAYPARTANIM = "Play Part Animation";
PLAYPARTANIM_TO = " %s part anim #%d";
PLAYPARTANIM_TO_S = " %s part anim #%d for %2.4f seconds";
PLAYS_AFTER_END = "(Plays after end)";
PLAY_AFTER_END = "Play after mission end?";
PLAY_AUDIO_SCRIPT = "Play Audio Script";
PLAY_SOUND = "Play %s";
PLAY_WAV = "Play WAV";
PLAY_WAVLIST = "Play Dialog";
PLAY_WAV_FILE_LIST = "Play dialog ID: %s %s";
POSITION = "Position";
POSITION_50_CAL = "50 Calibur View";
POSITION_CHASE_CAM = "Chase Cam View";
POSITION_DRIVER = "Driver View";
POSITION_GUNNER = "Gunner View";
PRONER = "Proner";
PRONE_BIT = "Prone (0 or 1)";
PRONE_OFF = " prone to off";
PRONE_ON = " prone to on";
REACHED_WAYPOINT = "Reached Waypoint";
REACHES_WAYPOINT = "Reaches Waypoint";
RED = "Red";
REDIRECT_GROUP_TO = "Redirect Group";
REDIRECT_SINGLE_TO = "Redirect SSN";
REDIRECT_SQUAD = "Redirect_Squad";
REDIRECT_TO = "Redirect To";
RED_ALERT = "Red Alert";
RED_WIN = "Win, Red";
REMAINING_AMMO = "Remaining Ammo";
RESERVED = "(reserved)";
RESERVED2 = "Reserved";
RESET_EVENT = "Reset Event";
RESET_EVENT_TO = "Reset Event %d";
ROLLBOY = "Rolls Over";
ROLLBOY_BIT = "Rolls Over (0 or 1)";
ROLLBOY_OFF = " do not Roll Over";
ROLLBOY_ON = " Roll Over";
SAVE_TRIGGERS = "Save Triggers";
SAW_GROUP = "Saw Group";
SAW_SINGLE = "Saw SSN";
SECONDS = "Seconds";
SECOND_TIME = "2nd Time";
SECOND_TIME_THROUGH = "Even Numbered Time Playing";
SEES_ENEMY = "Sees Enemy";
SETAI = "SetAI";
SETSIDE = "Set Side";
SET_FALSE = "Set Flag FALSE";
SET_GOAL_TEXT = "Set Goal Text";
SET_GOAL_TEXT_PARAM = "Set goal text %s to %s";
SET_GROUP_TO_SPEED = "Set Group %i to %ikph";
SET_LIGHT_STATE = "Turn Lights On/Off";
SET_LIGHT_STATE_TO = "Turn Light Group %d %s";
SET_SINGLE_TO_SPEED = "Set SSN %i to %i km/h";
SET_TIMER = "Set Timer";
SET_TRUE = "Set Flag TRUE";
SET_VARIABLE = "Set Variable";
SEVEN = "7";
SHOT_GROUP = "Shot Group";
SHOT_SINGLE = "Shot SSN";
SHOW_LOSE_SUBGOAL = "Show Lose Subgoal";
SHOW_LOSE_SUBGOAL_TO = "Show Lose Subgoal %d";
SHOW_WAYPOINTS = "Show Waypoints";
SHOW_WAYPOINTS_TO = "Show Waypoints";
SHOW_WIN_SUBGOAL = "Show Win Subgoal";
SHOW_WIN_SUBGOAL_TO = "Show Win Subgoal %d";
SIDE = "Side";
SIDE_ENEMY = "enemy";
SIDE_FRIENDLY = "friendly";
SIDE_MERCENARY = "mercenary";
SIDE_NEUTRAL = "neutral";
SILENT = "Silent";
SILENT_BIT = "Silent (0 or 1)";
SILENT_OFF = " silent to off";
SILENT_ON = " silent to on";
SINGLE = "SSN";
SINGLE1 = "SSN 1";
SINGLE2 = "SSN 2";
SINGLE_ALIVE = "SSN %i is alive";
SINGLE_AT_RED_ALERT = "SSN %i is at red alert";
SINGLE_AT_WAYPOINT = "SSN %i has reached waypoint %i, %i";
SINGLE_AT_YELLOW_ALERT = "SSN %i is at yellow alert";
SINGLE_CHANGE_GROUP = "Change Group, SSN";
SINGLE_DESTROYED = "SSN %i is dead";
SINGLE_HAS_LOST_MORE_UNITS = "SSN %i has lost %i or more health";
SINGLE_HAS_MORE_UNITS = "SSN %i has %i or more health";
SINGLE_HAS_NOT_LOST_MORE_UNITS = "SSN %i has not lost %i or more health";
SINGLE_HAS_NOT_SHOT_GROUP = "SSN %i has not shot Group %i";
SINGLE_HAS_NOT_SHOT_SINGLE = "SSN %i has not shot SSN %i";
SINGLE_HAS_NOT_TARGETED_GROUP = "SSN %i has not tageted Group %i";
SINGLE_HAS_NOT_TARGETED_SINGLE = "SSN %i has not targeted SSN %i";
SINGLE_HAS_SHOT_GROUP = "SSN %i has shot Group %i";
SINGLE_HAS_SHOT_SINGLE = "SSN %i has shot SSN %i";
SINGLE_HAS_TARGETED_GROUP = "SSN %i has targeted Group %i";
SINGLE_HAS_TARGETED_SINGLE = "SSN %i has target SSN %i";
SINGLE_HOLDING_GROUP = "SSN %i does hold Group %i";
SINGLE_INTACT = "SSN %i has full health";
SINGLE_IS_NOT_WITHIN_AREA = "SSN %i is not within area %i";
SINGLE_IS_WITHIN_AREA = "SSN %i is within area %i";
SINGLE_LESS_THAN = "SSN %i has less than %i health";
SINGLE_NOT_ALIVE = "SSN %i has been killed";
SINGLE_NOT_AT_RED_ALERT = "SSN %i is not at red alert";
SINGLE_NOT_AT_WAYPOINT = "SSN %i has not reached waypoint %i, %i";
SINGLE_NOT_AT_YELLOW_ALERT = "SSN %i is not at yellow alert";
SINGLE_NOT_DESTROYED = "SSN %i is not dead";
SINGLE_NOT_HOLDING_GROUP = "SSN %i does not hold Group %i";
SINGLE_NOT_INTACT = "SSN %i does not have full health";
SINGLE_NOT_SEES_GROUP = "SSN %i does not see Group %i";
SINGLE_NOT_SEES_SINGLE = "SSN %i does not see SSN %i";
SINGLE_REDIRECT_TO = "Redirect SSN %i to nearest waypoint in list %i";
SINGLE_REDIRECT_TO_POINT = "Redirect SSN %i to waypoint %i-%i";
SINGLE_RESET_HASVISITED = "Reset Has Visited Flags, SSN";
SINGLE_RESET_HASVISITED_TO = "Reset waypoints SSN %d has visited";
SINGLE_SEES_GROUP = "SSN %i sees Group %i";
SINGLE_SEES_SINGLE = "SSN %i does see SSN %i";
SINGLE_TELEPORT_ACTION = "Teleport SSN";
SINGLE_TELEPORT_STRING = "Teleport SSN %i to target %i";
SINGLE_VELOCITY = "Velocity, SSN";
SIX = "6";
SKILL = "Skill Level";
SOUND = "Sound";
SOUND-NULL = "Sound - null";
SOUNDTRIG_ACTION = "Play/Stop Items's Sound Effect";
SOUNDTRIG_ITEM = "Sound Item SSN";
SOUNDTRIG_STRING = "%s SSN %d sound effect";
SOUND_FILE = "Sound File";
SPEED = "Speed";
SPEEDKMH = "Speed (km/h)";
SQUASHED = "Squashed";
SSN_TARGET_GROUP_EXC = "Target Group by SSN, Exclusive";
SSN_TARGET_GROUP_EXC_STR = "SSN %d exclusively target Group %d";
SSN_TARGET_GROUP_PRI = "Target Group by SSN, Priority";
SSN_TARGET_GROUP_PRI_STR = "SSN %d prioritize target Group %d";
SSN_TARGET_SSN_EXC = "Target SSN by SSN, Exclusive";
SSN_TARGET_SSN_EXC_STR = "SSN %d exclusively target SSN %d";
SSN_TARGET_SSN_PRI = "Target SSN by SSN, Priority";
SSN_TARGET_SSN_PRI_STR = "SSN %d prioritize target SSN %d";
STANDER = "Stander";
STAND_BIT = "Stand (0 or 1)";
STAND_OFF = " stand to off";
STAND_ON = " stand to on";
START_COUNTER = "Start Counter";
START_COUNTER_NUMBER = "Start Counter #%i";
STATIC_UNIT = "Static Unit";
SUB_GOAL_HARD = "Mission Critical Condition";
SUB_GOAL_LOST = "Lose Sub Goal";
SUB_GOAL_MSGNUMBER = "Sub Goal Message Number";
SUB_GOAL_NUMBER = "Sub Goal Number";
SUB_GOAL_NUM_LOST = "Lose Sub Goal %i %s";
SUB_GOAL_NUM_WON = "Win Sub Goal %i %s";
SUB_GOAL_WON = "Win Sub Goal";
SUB_VARIABLE = "Decrement Variable";
TANK_BANK_GT = "Tank Bank >";
TANK_BANK_LT = "Tank Bank <";
TANK_PITCH_GT = "Tank Pitch >";
TANK_PITCH_LT = "Tank Pitch <";
TARGET = "Target";
TARGETED_GROUP = "Targeted Group";
TARGETED_SINGLE = "Targeted SSN";
TARGETS = "Targets";
TARGETSSN = "Target SSN";
TARGET_SSN = "%2i - (SSN %d)";
TEAMMATE-NULL = "Teammate - Null";
TEAMMATES = "Teammates";
TEAMMATE_CALL_EVAC_AT = "Evacuate Teammate to Area Trigger";
TEAMMATE_CALL_EVAC_TT = "Evacuate Teammate to Teleport Target";
TEAMMATE_CALL_MEDIC = "Call Medic for Teammate";
TEAMMATE_ENABLED = "Enabled";
TEAMMATE_EVAC = "Evacuating Teammate";
TEAMMATE_EVACUATE_AT = "Evacuate Teammate (SSN %d) within Area %d";
TEAMMATE_EVACUATE_TT = "Evacuate Teammate (SSN %d) at TT#%d";
TEAMMATE_EVACUATING = "A teammate is being evacuated";
TEAMMATE_EVACUATING_NOT = "A teammate is not being evacuated";
TEAMMATE_IS_DISABLED = "Teammates are off";
TEAMMATE_IS_ENABLED = "Teammates are On";
TEAMMATE_MEDIC = "Medic Assisting Teammate";
TEAMMATE_MEDIC_ASSIST = "Teleport Medic to TT#%d for teammate (SSN %d)";
TEAMMATE_MEDIC_ASSISTING = "A teammate is being assisted by a medic";
TEAMMATE_MEDIC_ASSISTING_NOT = "A teammate is not being assisted by a medic";
TELEPORT_TARGET_NUM = "Teleport target";
TEXT = "Text";
TEXT-NULL = "Text - null";
TEXTTOOL_ID = "Texttool ID";
TEXT_ID = "Text ID";
TEXT_MESSAGE = "Display Text Message %i";
TEXT_MSG = "Text Message";
THREE = "3";
TICKS = "Ticks (1/60s)";
TIME = "Time";
TIME-NULL = "Time - null";
TIMER = "Timer";
TIMER-NULL = "Timer - Null";
TIMER_A = "A";
TIMER_B = "B";
TIMER_C = "C";
TIMER_CLEAR = "Clear Timer %s";
TIMER_COUNTER_EQ = "Timer %s = %i seconds";
TIMER_COUNTER_NE = "Timer %s <> %i seconds";
TIMER_D = "D";
TIMER_ELAPSED_TIME_GE = "Elapsed Time >= %i seconds";
TIMER_ELAPSED_TIME_LT = "Elapsed time < %i seconds";
TIMER_SEC = "Timer (seconds)";
TIME_MIN = "Time (Minutes)";
TIME_SEC = "Time (seconds)";
TMATESTATUS = "Teammate Command Status";
TMATETOGGLE_OFF = "disable teammate command";
TMATETOGGLE_ON = "enable teammate command";
TOGGLE = "Toggle Flag";
TO_FOV_DEGREES = " fov to %i degrees";
TO_GREEN_ALERT = " Green Alert";
TO_RED_ALERT = " Red Alert";
TO_YELLOW_ALERT = " Yellow Alert";
TRIGGER = "Trigger";
TRIGGER-NULL = "Trigger - null";
TRIGGER_FIRED = "Trigger #%i has fired";
TRIGGER_HAS_FIRED = "Trigger has fired";
TRIGGER_NOT_FIRED = "Trigger #%i has not fired";
TRIGGER_NUM = "Trigger #";
TWO = "2";
UNKNOWN = "Unknown";
UNLOAD = "Unload";
VALUE = "Value";
VAPORIZE = "Vaporize";
VAPORIZE_GROUP = "Vaporize Group";
VAPORIZE_GROUP_NUM = "Vaporize Group %i";
VAPORIZE_SINGLE = "Vaporize SSN";
VAPORIZE_SINGLE_NUM = "Vaporize SSN %i";
VARIABLE = "Variable";
VARIABLE_DECREMENT = "Decrement Variable #%i";
VARIABLE_FLAGS_EQ = "%s team CTF flags remaining = %i";
VARIABLE_FLAGS_NE = "%s team CTF flags remaining <> %i";
VARIABLE_GOALS_EQ = "%s team goals = %i";
VARIABLE_GOALS_NE = "%s team goals <> %i";
VARIABLE_GOALS_REMAINING_EQ = "%s team campaign goals remaining = %i";
VARIABLE_GOALS_REMAINING_GT = "%s team campaign goals remaining > %i";
VARIABLE_GOALS_REMAINING_LE = "%s team campaign goals remaining <= %i";
VARIABLE_GOALS_REMAINING_NE = "%s team campaign goals remaining <> %i";
VARIABLE_INCREMENT = "Increment Variable #%i";
VARIABLE_NUMBER_STRING = "Variable Number";
VARIABLE_SET = "Set Variable #%i to %i";
VARIABLE_STATUS = "Variable Status";
VELOCITY_KPH = "Velocity (kph)";
WAV = "wav";
WAV_LIST_NUMBER = "Dialog ID";
WAYGROUP = "Waygroup";
WAYPOINT = "Waypoint";
WAYPOINT_LIST = "Waypoint List";
WAYPOINT_NUMBER = "Waypoint Number";
WAYPT_REACHED = "Waypoint Reached";
WEAPON = "Weapon";
WEAPONSEL = "Weapon Selection";
WEAPONS_TO = " weapons to (%s)";
WEAPON_50_CAL = "50 Cal";
WEAPON_762 = "762";
WEAPON_HEAT = "HEAT";
WEAPON_MPAT = "MPAT";
WEAPON_NUMBER = "Weapon Number";
WEAPON_SABOT = "SABOT";
WEAPON_SELECTED = "Weapon Selected";
WEAPON_SMOKE = "SMOKE";
WEAPON_STAFF = "STAFF";
WIN = "Win";
YELLOW_ALERT = "Yellow Alert";
ZERO = "0";
STARTFIRING_ON = "Start Firing";
STARTFIRING_OFF = "Stop Firing";
STARTFIRING_BIT = "Firing State";
STARTFIRING = "Start Firing";
FIRING_ANGLE = "Firing Angle";
FIRING_ANGLE_TO = "Firing Angle: %d degrees";

'[Tool Modes]'
DEPTHPIXEL_MODE = "Depth Pixel X: %3d Y: %3d";
INSERT_MODE = "Insert Mode";
PAINT_MODE = "Paint Mode";

'[File I/O]'
AF_IN_FILTER_DES = "AF3 Mission file (*.mis)";
AF_IN_FILTER_EXT = "*.mis";
AF_OUT_FILTER_DES = "Binary mission file (*.bms)";
AF_OUT_FILTER_DES_CONS = "Fist 3 Mission file (*.f3m)";
AF_OUT_FILTER_EXT = "*.bms";
AF_OUT_FILTER_EXT_CONS = "*.f3m";
AREATRIGGER_LIST_HEADER = "// Area Trigger List for %s, saved on %i/%i/%i, %i:%2i


";
DEF_EXT = "txt";
DF_IN_FILTER_DES = "ASCII Mission file (*.mis)";
DF_IN_FILTER_EXT = "*.mis";
DF_OUT_FILTER_DES = "Binary mission file (*.bms)";
DF_OUT_FILTER_EXT = "*.bms";
GROUP_LIST_HEADER = "// Group List for %s, saved on %i/%i/%i, %i:%2i


";
OVERKILL_IN_FILTER_DES = "ASCII Mission file (*.tms)";
OVERKILL_IN_FILTER_EXT = "*.tms";
OVERKILL_OUT_FILTER_DES = "Mission file (*.mis)";
OVERKILL_OUT_FILTER_EXT = "*.mis";
TEXT_FILE_FILTER_DES = "Text file (*.txt)";
TEXT_FILE_FILTER_EXT = "*.txt";
WAYPOINT_LIST_HEADER = "// Waypoint List for %s, saved on %i/%i/%i, %i:%2i


";
TILER_FILTER_DES = "Tiler File (*.til)";
TILER_FILTER_EXT = "*.til";

'[Write Event]'
ACTIONS = "  Actions:
";
DELAY_EVENT = "  Delay event %i seconds
";
EVENT_HEADER = "// Event %i for %s, saved on %i/%i/%i, %i:%02i


";
EVENT_LIST_HEADER = "// Event List for %s, saved on %i/%i/%i, %i:%02i


";
EVENT_NUMBER = "Event %i: %s
";
POST_MISSION_EVENT = "  Post-Mission event
";
PRE_MISSION_EVENT = "  Pre-Mission event
";
RESET_AFTER = "  Reset after %i seconds
";
TRIGGERS = "Triggers:
";

'[Med Selection]'
AZ-D-5D = "AZ: %d.%.5d";
BLOCK = "Block";
CHAR_TILE = "Char Tile";
CLR = "Clr";
DIMENSIONS = "Dimensions:";
ELEV-D-D = "Elev: %d.%d";
GROUP_COLON = "Group:";
GROUP_NONE = "0 - None";
HEADING = "Heading: %i";
HGT-3F = "Hgt: %.3f";
INFO = "Info";
ITEM_GROUP = "Group: %i - %s";
ITEM_NAME = "Name: %s";
ITEM_NUM = "Item #%i";
ITEM_TYPE = "Type: %i";
ITEM_WAYPOINT = "Waypoint: %i, %i";
ITEM_X_POS = "X: %i.%i";
ITEM_Y_POS = "Y: %i.%i";
ITEM_Z_POS = "Z: %i.%i";
LAYER = "Layer:";
LAYER_NUM = "%i - (unnamed)";
LEN-3F = "Len: %.3f";
LENGTH-D-D = "Length : %d.%d";
LOAD = "Load";
MAP = "Map:";
NAME-S = "Name: %s";
NO_ITEMS = "No Items Selected";
NO_TILES = "No Tiles Selected";
RULER = "Ruler";
1RULER = "01: Ruler (1m)";
2RULER = "02: Ruler (10m)";
3RULER = "03: Ruler (100m)";
SAVE = "Save";
SELECTED_NUM = "Selected: %i";
SSN# = "SSN: %i";
THUMBNAIL = "Thumbnail";
WTH-3F = "Wth: %.3f";

'[Center Info]'
AF_CENTER_POS = "X: %f, Y: %f (m)";
DF_CENTER_POS = "X: %f, Y: %f (m)";
OVERKILL_CENTER_POS = "X: %5.5lf, Y: %5.5lf (ft)";

'[Med Window Text]'
ABSOLUTE_HEIGHT = "Absolute Height";
ABSOLUTE_MODE = "Absolute Mode";
AREA_TRIGGERS = "Area Triggers";
BUILDINGS = "Buildings";
CHARACTERS = "Characters";
CHAR_STRIP = "Strip";
CHAR_TILE = "Char Tile";
CLEAR_THIS_MISSION = "clear this mission";
COLLISION_MODELS = "Collision Models";
COLOR_MAP_BUTTON = "C";
DECORATIONS = "Decorations";
DEFAULT_GRID_SIZE = "1m";
DEPTH_MAP_BUTTON = "H";
DF_GRID_SIZE_CM = "%.3fcm";
DF_GRID_SIZE_M = "%im";
FIRST_ORDER_MAP_BUTTON = "D";
FOLIAGE = "Foliage";
FOV_CONES = "FOV Cones";
GRID = "Grid:";
GRID+ = "+";
GRID- = "-";
HEIGHT_LOCK = "&Lock";
LAYER_BUTTON = "Layers";
MARKERS = "Markers";
MILITARY_GRID_SIZE = "%.1lfft";
OBJECTS = "Objects";
OVERKILL_GRID_SIZE = "%.3lfft";
PAGE_1_BUTTON = "P1";
PAGE_2_BUTTON = "P2";
PEOPLE = "People";
SHOW = "Show:";
SNAP_TO_GRID = "Snap";
TEAM_BLUE = "Team Blue";
TEAM_GREEN = "Team Green";
TEAM_RED = "Team Red";
TEAM_VIOLET = "Team Violet";
TEAM_YELLOW = "Team Yellow";
TILE_SHOW = "Char Tiles";
UNSELECT_ALL_BUTTON = "Unselect All";
VEHICLES = "Vehicles";
VIEW = "View";
VIEW_3D = "3D Wireframe";
WATER = "Water";
WP_DIST = "WP Distance";

'[Trigger Logic]'
OR = " or";
XOR = " xor";
AND = " and";

'[Wind]'
ERROR_MSG = "Error";
DLG_MSG_4 = "Name";
DLG_MSG_5 = "start";
DLG_MSG_6 = "stop";
DLG_MSG_7 = "heading";
DLG_MSG_8 = "speed";
DLG_MSG_9 = "(NO NAME)";
DLG_MSG_10 = "The maximum number of wind gusts is 24.";
DLG_MSG_11 = "Error allocating memory for windgust data.";
DLG_MSG_12 = "Start time must be less then or equal to stop time.";
DLG_MSG_13 = "Wind speed values range from 0 - 128.";
DLG_MSG_14 = "Negative values are not allowed.";

'[Speeds]'
000_PERCENT = "  0%";
006_PERCENT = "  6%";
012_PERCENT = " 12%";
018_PERCENT = " 18%";
025_PERCENT = " 25%";
031_PERCENT = " 31%";
040_PERCENT = " 40%";
043_PERCENT = " 43%";
050_PERCENT = " 50%";
056_PERCENT = " 56%";
062_PERCENT = " 62%";
068_PERCENT = " 68%";
075_PERCENT = " 75%";
081_PERCENT = " 81%";
087_PERCENT = " 87%";
100_PERCENT = "100%";

'[AI Types]'
AI_NONE = "No Action";
AI_TARGET_ONLY = "Target Only";
AI_ROOKIE = "Rookie";
AI_STANDARD = "Standard";
AI_ADVANCED = "Advanced";
SOLDIER_AI_DUMB = "Dumb";
SOLDIER_AI_SMART = "Smart";
SOLDIER_AI_DELTA_FORCE = "Delta Force";
SOLDIER_AI_SCATTER = "Scatter";

'[Advance Types]'
ADVANCE_ADJUST = "Adjust, waiting for timer";
ADVANCE_NONE = "No movement";
ADVANCE_OPPORTUNITY = "Opportunity";
ADVANCE_PATROL = "Patrol";
ADVANCE_RETREAT = "Retreat";
ADVANCE_ROAD_MARCH = "Road March";
ADVANCE_TO_CONTACT = "Advance to contact";

'[Formation Types]'
FORMATION_F_COLUMN = "Column (Full spacing)";
FORMATION_F_DIAMOND = "Diamond (Full spacing)";
FORMATION_F_LINE = "Line (Full spacing)";
FORMATION_F_NONE = "Doesn't move (Full spacing)";
FORMATION_F_REFUSE_LEFT = "Refuse Left (Full spacing)";
FORMATION_F_REFUSE_RIGHT = "Refuse right (Full spacing)";
FORMATION_F_WEDGE = "Wedge (Full spacing)";
FORMATION_H_COLUMN = "Column (Half spacing)";
FORMATION_H_DIAMOND = "Diamond (Half spacing)";
FORMATION_H_LINE = "Line (Half spacing)";
FORMATION_H_NONE = "Doesn't Move (Half spacing)";
FORMATION_H_REFUSE_LEFT = "Refuse Left (Half spacing)";
FORMATION_H_REFUSE_RIGHT = "Refuse Right (Half spacing)";
FORMATION_H_WEDGE = "Wedge (Half spacing)";

'[Camo Types]'
CAMO_DESERT = "Desert";
CAMO_GREEN = "Green";
CAMO_NEUTRAL = "Neutral";
CAMO_SNOW = "Snow";

'[Groups]'
GROUPS_CONVOY = "Convoy";
GROUPS_PLATOON = "Platoon";
GROUPS_SQUAD = "Squad";
GROUPS_VEHICLES = "Vehicles";

'[Loadouts]'
LOADOUT_A = "A";
LOADOUT_B = "B";
LOADOUT_C = "C";
LOADOUT_D = "D";
LOADOUT_E = "E";
LOADOUT_F = "F";
LOADOUT_G = "G";

'[Export]'
ACT_INVALID_WAYPOINT = "Warning: Event %i, Action %i - Waypoint %i-%i is invalid";
ACT_INVALID_WAYPT_LIST = "Warning: Event %i, Action %i - Waypoint List %i is invalid";
ACT_NO_CONVOY_MEMBERS = "Warning: Event %i, Action %i - No units assigned to Convoy Group #%i";
ACT_NO_MARKER = "Warning: Event %i, Action %i - Marker does not exist";
ACT_NO_PLATOON_MEMBERS = "Warning: Event %i, Action %i - No units assigned to Platoon Group #%i";
ACT_NO_SQUAD_MEMBERS = "Warning: Event %i, Action %i - No units assigned to Squad group #%i";
ACT_NO_UNIT = "Warning: Event %i, Action %i - Unit (SSN %i) does not exist";
ACT_NUMBER_TOO_HIGH = "Note: Event %i, Action %i - Specified value is too high.  Value has been changed to the maximum setting.";
ACT_TOO_MANY_SCRIPTS = "Error: Event %i, Action %i - Only one audio script per event is allowed";
ATRIG_NUM_TOO_HIGH = "Warning: Area Trigger (SSN %i) number exceeds current limit: %i";
CANT_USE_FLAG = "Error: (SSN %i) CTF flags can only be used in CTF missions";
DUPLICATE_WPNUMBER = "Warning: Waypoint List %i has duplicate Number %i assigned";
EXPORT_LOG = "Export Log";
GROUP_ZERO_VEHICLES = "Warning: (SSN %i) Vehicles assigned to group 0 will not move to any waypoints";
INVALID_ADVANCE_TYPE = "Error: Event %i, Action %i - M1A2 Platoons cannot be set to 'Adjust' Advance Type.";
INVALID_MORE_THAN = "Error: (SSN %i) "Add if more than" attribute is too high.";
INVALID_TEAM = "Error: (SSN %i) cannot be Neutral";
INVALID_WAYPOINT_GROUP = "Error: (SSN %i) is assigned to a Waypoint List with no waypoints";
INVALID_WAYPOINT_NUMBER = "Error: (SSN %i) is assigned to a Waypoint Number which does not exist.";
LESS_THAN_32_M1A2S = "Warning: Less than 32 M1A2s have been created for this multi-player game";
LINE_NUM_TOO_HIGH = "Warning: Line (SSN %i) number exceeds current limit: %i";
NEED_AIRGROUP = "Error: (SSN%i) needs to be in Group %i or higher";
NEED_CONVOY_GROUP = "Error: (SSN %i) must be in a Convoy Group to follow waypoints";
NEED_PLATOON_GROUP = "Error: (SSN %i) must be in a Platoon Group";
NEED_SQUAD_GROUP = "Error: (SSN %i) must be in a Squad Group";
NO_ACTIONS = "Error: Event %i has no valid actions";
NO_AIRBASE = "Error: (SSN %i) needs an airbase in its group";
NO_BEACON_NUMBER = "Warning: Beacon (SSN %i) has no number assigned";
NO_BLUE_CTF_FLAGS = "Error: No CTF flags for the blue team";
NO_LEADER = "Error: Group %i needs a Leader";
NO_MATCHING_BEACON = "Warning: Aircraft (SSN %i) is assigned to a non-existent beacon: (Number %i in group %i)";
NO_MISSION_NAME = "Warning: No Mission Name has been entered";
NO_NEUTRAL_FLAGS = "Error: Event %i, Trigger %i - Neutral CTF flags not supported";
NO_RED_CTF_FLAGS = "Error: No CTF flags for the red team";
NO_TERRAIN = "Error: No Terrain has been selected";
NO_TRIGGERS = "Error: Event %i has no valid triggers";
NO_WIN_EVENT = "Warning: No win condition Event has been created";
OBJECT_OUT_OF_BOUNDS = "Note: Unit (SSN %i) was placed out of bounds.  It has been repositioned within the red boundary.";
ONE_M1A2_PER_PLATOON = "Error: There should only be 1 M1A2 in Platoon Group #%i for this mission type";
PC_TANK_MUST_BE_M1A2 = "Error: (SSN %i) is not an M1A2; Platoons with an M1A2 leader can only contain M1A2s";
PLAYER_IS_BLUE = "Error: Group 1 needs a Leader on the Blue Team";
PLAYER_IS_M1A2 = "Error: Group 1 needs an M1A2 Leader";
SOLDIER_BAD_WPNUMBER = "Note: (SSN %i) Starting Waypoint Number should not be 0.  Number changed to 1";
TIME_LIMIT_MAX = "Note: Mission Time Limit is greater than the maximum.  It has been changed to the maximum value.";
TIME_LIMIT_ZERO = "Error: No Time Limit specified";
TOO_MANY_LEADERS = "Error: Group %i can only have 1 leader";
TOO_MANY_M1A2S = "Error: There can not be more than 32 M1A2s in a mission";
TOO_MANY_OBJECTS = "Error: There are too many objects in the mission [%i].  The maximum number of objects is %i.";
TOO_MANY_PLAYERS = "Error: The number of player (M1A2) platoons [%i] exceeds the maximum number allowed [%i] for this mission type.";
TOO_MANY_TANKS = "Error: There can only be 4 tanks in Group %i";
TRIG_INVALID_WAYPOINT = "Warning: Event %i, Trigger %i - Waypoint %i-%i is invalid";
TRIG_INVALID_WAYPT_LIST = "Warning: Event %i, Trigger %i - Waypoint List %i is invalid";
TRIG_NO_CONVOY_MEMBERS = "Warning: Event %i, Trigger %i - No units assigned to convoy group #%i";
TRIG_NO_MARKER = "Warning: Event %i, Trigger %i - Marker does not exist";
TRIG_NO_PLATOON_MEMBERS = "Warning: Event %i, Trigger %i - No units assigned to Platoon group #%i";
TRIG_NO_SQUAD_MEMBERS = "Warning: Event %i, Trigger %i - No units assigned to Squad group #%i";
TRIG_NO_UNIT = "Warning: Event %i, Trigger %i - Unit (SSN %i) does not exist";
TRIG_NUMBER_TOO_HIGH = "Note: Event %i, Trigger %i - Specified value is too high.  Value has been changed to the maximum setting.";
UNKNOWN_LOADOUT = "Warning: Unknown Loadout Selected - Using default loadout";
UNNECESSARY_GOAL = "Note: (SSN %i) cannot be a goal in this Multiplayer game.  Goal status removed.";
ZERO_NUMBER_VALUE = "Warning: (SSN %i) Number value should not be zero";
RAMPING_VALUE_TOO_LOW = "Error: (SSN# %i)'s "Add if more than" value [ %i ] must be greater than or equal to the leader's [ %i ].";
UNASSIGNED_WAYPOINT = "Warning: Waypoint (SSN %i) is not assigned to a Waypoint List";

'[Map Icons]'
AMMO_DUMP = "Ammo Dump";
ANTI_AIR = "Anti-air";
APC = "APC";
APC_CMDR = "APC CMDR";
APC_PLATOON = "APC Platoon";
ARTILLERY = "Artillery";
BUNKER = "Bunker";
CONVOY = "Convoy";
FIXED_WING = "Fixed-Wing Aircraft";
FUEL_POINT = "Fuel Point";
HQ = "Headquarters";
MECH_INF = "Mech. Infantry";
MECH_INF_CMDR = "Mech. Infantry CMDR";
MECH_INF_PLATOON = "Mech. Infantry Platoon";
MEDICAL = "Medical Unit";
MINEFIELD = "Minefield";
NONE = " None";
ROTARY_CRAFT = "Rotary Aircraft";
SCUD = "Scud";
SIGNAL = "Signal Unit";
STRUCTURE = "Structure";
TANK = "Tank, single";
TANK_CMDR = "Tank CMDR";
TANK_PLATOON = "Tank Platoon";
TANK_TRAP = "Tank Trap";
TRUCK = "Truck";
WAYPOINT = "Waypoint";

'[Name Overrides]'
NN11 = "Eliminator";
NN12 = "Enforcer";
NN13 = "Excalibur";
NN14 = "El Diablo";
NN21 = "Devildog";
NN22 = "Destroyer";
NN23 = "Devastator";
NN24 = "Desperado";
NN31 = "Bam Bam";
NN32 = "Bulldog";
NN33 = "Bad Idea";
NN34 = "Bullseye";
NN41 = "Grizzly";
NN42 = "Goliath";
NN43 = "Gladiator";
NN44 = "Gridlock";
NN51 = "Attila";
NN52 = "Avenger";
NN53 = "Archangel";
NN54 = "Assassin";
NN61 = "Hellfire";
NN62 = "Hammerhead";
NN63 = "Hunter";
NN64 = "Harbinger";
NN71 = "Conquest";
NN72 = "Claymore";
NN73 = "Cowboy";
NN74 = "Cutthroat";
NN81 = "Firestorm";
NN82 = "Freakshow";
NN83 = "Fearless";
NN84 = "Fast Times";

'[Menu Text]'
INFO_ABOUTDFMED = "&About DFBHDMED";
EDIT_AREATRIGGERS = "&Area Triggers";
TOOLS_BLINK = "&Blink Group Stats";
EDIT_BRIEFING = "&Briefing";
EDIT_SORTOBJ = "&Cleanup SSNs";
FILE_CLEAR = "&Clear";
EDIT_EVENTS = "&Events";
FILE_EXPORT = "&Export Binary Mission";
FILE = "&File";
EDIT_REPLACE = "&Global Replace";
EDIT_GROUPS = "&Groups";
INFO = "&Info";
EDIT_LAYERNAMES = "&Layer Names";
FILE_OPEN = "&Open";
PAGE = "&Page";
FILE_PRINT = "&Print";
EDIT_REDO = "&Redo";
FILE_SAVE = "&Save";
FILE_SAVEANDEXPORT = "&Save and Export";
EDIT_SELECTSSN = "&Select Items";
EDIT_TELEPORTTARGETS = "&Teleport Targets";
TOOLS_TILER = "&Tile Floater";
TOOLS = "&Tools";
EDIT_UNDO = "&Undo";
VIEW = "&View";
EDIT_WAYPOINTS = "&Waypoints";
EDIT_COPY = "Copy";
EDIT_CUT = "Cut";
EDIT_DELETE = "Delete";
EDIT_DEPTHPIXELMODE = "Depth Pixel Mode";
MOUSE_DESELECTTHISGROUP = "Deselect This Group";
FILE_EXIT = "E&xit";
EDIT = "Edit";
EDIT_ITEM_ATTRIBUTES = "Edit Item Attributes";
MOUSE_EXITPROGRAM = "Exit Program";
EDIT_GENERALINFO = "General &Information";
GROUP_ROTATE = "Group Rotate";
MOUSE_HIDESELECTED = "Hide Selected";
MOUSE_HIDEUNSELECTED = "Hide Unselected";
EDIT_INSERTMODE = "Insert Mode";
MOUSE_MOVE = "Move";
PAGE_1 = "Page &1";
PAGE_2 = "Page &2";
EDIT_PASTE = "Paste";
FILE_SAVEAS = "Save &As";
VIEW_SELECTBLINK = "Select &Blink Group";
MOUSE_SELECTTHISBLINKGROUP = "Select This Blink Group";
MOUSE_SELECTTHISGROUP = "Select This Group";
MOUSE_SELECTTYPE = "Select This Type";
MOUSE_SELECTTHISWAYLIST = "Select This Waypoint List";
MOUSE_SNAPTOGRIDLINE = "Snap To Grid Line";
MOUSE_TERRAINSNAP = "Snap To Terrain";
MOUSE_UNHIDEALL = "Unhide All";
VIEW_BYLAYER = "View by &Layer";
VIEW_BYSIDE = "View by &Side";
VIEW_BYTYPE = "View by &Type";

'[Weather]'
NICE_DAY = "Nice Day";
RAIN = "Rain";
SNOW = "Snow";

'[Characters]'
CQB = "Close Quarter Battle";
DELTAFORCE = "Delta Force";
DEMO = "Demolitions";
GUNNER = "Gunner";
MEDIC = "Medic";
RANGER = "Ranger";
SNIPER = "Sniper";
TENTHMTN = "10th Mountain";
SAS = "SAS";

'[Fsm]'
FSMACE = "Ace";
FSMAVG = "Average";
FSMFAIR = "Fair";
FSMFOLLOWWP = "Follow Waypoint";
FSMFORMATION = "Formation";
FSMGOOD = "Good";
FSMLAND = "Land";
FSMPOOR = "Poor";
FSMPRETTY = "Pretty";
FSMRTB = "Return To Base";
FSMANIMPLAY = "Play";
FSMANIMSTOP = "Stop";
FSMANIMREV = "Play Reverse";

'[hud]'
ALTITUDE_AGL = "Altitude AGL Flash";
ALTITUDE_ASL = "Altitude ASL Flash";
SIHLOUETTE = "Comanche Sihlouette";
COMPASS = "Compass Flash";
FARPKARAT = "FARP Karat Flash";
RADAR_BLUES = "Radar Blue (Good) Flash";
RADAR_CIRCLES = "Radar Circles Flash";
RADAR_CROSSES = "Radar Crosses Flash";
RADAR_FARP = "Radar FARP 'H' Flash";
RADAR = "Radar Flash";
RADAR_REDS = "Radar Red (Evil) Flash";
RADAR_SQUARES = "Radar Squares Flash";
RADAR_TRIANGLES = "Radar Triangles Flash";
TARGETCAM = "Target Camera Flash";
COMPASS_WPKARAT = "Waypoint Karat Flash";
COMPASS_LOLLYPOP = "Waypoint Lollypop Flash";

'[Waypoints]'
GOTO_GROUP = "Goto Group";
GOTO_PLAYER = "Goto Player";
GOTO_SSN = "Goto SSN";

'[Terrain]'
TERRAIN_TYPE = "Terrain Type";
DESERT = "Desert";
JUNGLE = "Jungle";
SNOW = "Snow";
`,
  "resources/game_strings/menutxt.bin": `'[Menu]'
AA_MODE01 = "Off";
AA_MODE02 = "2";
AA_MODE03 = "3";
AA_MODE04 = "4";
AA_MODE05 = "5";
AA_MODE06 = "6";
AA_MODE07 = "7";
AA_MODE08 = "8";
AA_MODE09 = "9";
AA_MODE11 = "10";
AA_MODE12 = "12";
AA_MODE13 = "13";
AA_MODE14 = "14";
AA_MODE15 = "15";
AA_MODE16 = "16";
ACCESSORY = "Accessory";
AGL = "Above Ground Level";
ALTLOCK = "Altitude Lock";
ASL = "Above Sea Level";
ASLAGL = "ALT Lock Type";
AdvancedGameOptions = "Advanced Game Options";
BACK_NO_HOT = "BACK";
BITDEPTH_16 = "16";
BITDEPTH_16LOW = "16 (Low)";
BITDEPTH_32 = "32";
BTN_PSET = "Player Settings";
CAMPAIGN = "{hot}Campaign View";
CAMPAIGN99 = "Mission Archives";
CAMPAIGN99_BRIEF = "This is the Mission Archive section where you can replay previously completed missions and user-created missions.";
CAMPAIGN_CHOOSER_HEADER = "CAMPAIGN";
CAMPAIGN_COMPLETE = "This campaign has been completed.";
CAMPAIGN_HEADER = "CAMPAIGN MISSION";
CAMPAIGN_UNK = "Campaign";
CHARTYPE_DELTA_CQB = "Delta Force CQB";
CHARTYPE_DELTA_GUNNER = "Delta Force Gunner";
CHARTYPE_DELTA_MEDIC = "Delta Force Medic";
CHARTYPE_DELTA_SNIPER = "Delta Force Sniper";
CHARTYPE_SAS_CQB = "SAS CQB";
CHARTYPE_SAS_GUNNER = "SAS Gunner";
CHARTYPE_SAS_MEDIC = "SAS Medic";
CHARTYPE_SAS_SNIPER = "SAS Sniper";
CHOICENO = "No";
CHOICEOFF = "Off";
CHOICEON = "On";
CHOICEYES = "Yes";
CONNECT_BROADBAND = "Broadband Only";
CONNECT_MIXED = "Mixed";
CONNECT_STANDARD = "Standard";
CURRENT_LOADOUT = "CURRENT LOADOUT";
CURR_LOADOUT_ACCESSORY = "Accessories: %%s";
CURR_LOADOUT_PRIMARY = "Primary Weapon: %%s";
CURR_LOADOUT_SECONDARY = "Secondary Weapon: %%s";
CharFace = "Character Face";
CharType = "Character Options";
DD_ACCEPT = "Accept";
DD_BLUE = "Blue";
DD_CANCEL = "Cancel";
DD_CEILING = "Ceiling Light";
DD_CLOUD = "Cloud Color";
DD_DONE = "Done";
DD_FLOOR = "Floor Light";
DD_FOG = "Fog Color";
DD_FOG_DISTANCE = "Fog Distance";
DD_FOG_TYPE = "Fog Type";
DD_GREEN = "Green";
DD_GROUND = "Ground Light";
DD_HUE = "Hue";
DD_LIGHTNING = "Lightning Color";
DD_RED = "Red";
DD_SATURATION = "Saturation";
DD_SKY = "Sky Light";
DD_SKYFOG = "Sky Fog Color";
DD_SKY_HEIGHT = "Sky Height";
DD_SKY_SPEED = "Sky Speed";
DD_SUN = "Sun Color";
DD_TERRAIN = "Terrain Color";
DD_VALUE = "Value";
DD_VERTEX = "Vertex";
DD_WATER = "Water Color";
DD_WATER_HEIGHT = "Water Height";
DETAIL_HIGH = "High";
DETAIL_LOW = "Low";
Delete_Player = "Delete Player";
FC_ChooseType = "Select camera view:";
FC_Type1 = "View: 3rd Person";
FC_Type2 = "View: Cockpit (Classic)";
FC_Type3 = "View: 1st Person";
FC_TypeCustom = "Custom (delete)";
GameOptions = "Game Options";
HGN_CONNECT_INTERNET = "Connection";
HGN_CONNECT_MODE = "Game Connection Mode";
HGT_AUTORANGE = "Allow Autorange";
HGT_BLUE_PWD = "Blue Team Password";
HGT_CHOOSETEAM = "Choose Team";
HGT_CLAY_FF = "Team Claymores";
HGT_FRIENDLY = "Friendly Fire";
HGT_FRIENDLYTAG = "Friendly Tags";
HGT_MAX_FF_KILLS = "Max FF Kills";
HGT_RED_PWD = "Red Team Password";
HGT_TEAM = "Team Options";
HGT_TEAMLIVES = "Team Lives";
HGT_TEAMPREF = "Team Preference";
HGT_WARNING = "FF Warning";
HGW_ALL_ALWAYS = "Always Available";
HGW_ALL_ARMORY = "Available in Armory Only";
HGW_ALL_DEFAULT = "Use Map Default Settings";
HGW_ALL_NEVER = "Never Available";
HGW_ALL_SETTING = "Set Availability for All Weapons:";
HGW_AVAILABILITY = "Availability";
HGW_TRACERS = "Show Tracers";
HGW_WEAPONS = "Weapon";
HG_AAD = "Attack and Defend";
HG_COOP = "Cooperative";
HG_CTF = "Capture The Flag";
HG_DM = "Deathmatch";
HG_FB = "Flag Ball";
HG_GAMENAME = "Game Name";
HG_GAMETYPE = "Game Type";
HG_GAME_OPT = "Map Options";
HG_HOSTOPT = "Host {hot}Options";
HG_KOTH = "King Of The Hill";
HG_LOCATION = "Country Code";
HG_MAPS = "Available Maps";
HG_MESSAGE = "Host Message";
HG_NOVA_OPT = "NovaWorld Options";
HG_PASSWORD = "Password";
HG_RECOMMENDED_MAXPLAYERS = "Recommended Max Players: %%i";
HG_REPLAY_1 = "No";
HG_REPLAY_2 = "Yes";
HG_REPLAY_3 = "Cycle";
HG_REQNWLOGIN = "Require NovaWorld Login";
HG_SAD = "Search and Destroy";
HG_SELECT = "Select Mission";
HG_SERVEONLY = "Serve";
HG_SERVEPLAY = "Serve and Play";
HG_SSNTYPE = "Session Type";
HG_START = "{hot}Start Hosting";
HG_STAT_SERVER = "Use Stat Server";
HG_SType = "Element List HG_STYPE";
HG_SVRTYPE = "Server Type";
HG_TCTF = "Team Capture The Flag";
HG_TDM = "Team Deathmatch";
HG_TEAM_OPT = "Team Options";
HG_TKOTH = "Team King Of The Hill";
HG_WEAP_OPT = "Weapon Options";
HOST = "HOST GAME";
HOSTING_GAME_TITLE = "HOST GAME";
HOT_DELAY = "Delay Start";
HOT_HOSTOPT = "Host Options";
HOT_KOTHTIME = "KOTH Time";
HOT_MAXPL = "Max Players";
HOT_REPLAY = "Replay";
HOT_RESPAWN = "Respawn Time";
HOT_SCORE = "Score Limit";
HOT_TEAMSLCT = "Team Selection";
HOT_TIME = "Time Limit";
HO_OPT_NOSKIN = "Allow Custom Skins";
HO_REP1 = "Cycle";
HO_REP2 = "Selected Map";
HO_SCORE_AD = "Target Limit";
HO_SCORE_DM = "Kill Limit";
HO_SCORE_FLAG = "Score Limit";
HO_SCORE_KOTH = "Zone Timer";
HO_SCORE_NA = "Not Used";
HO_TEAM0 = "Player Chooses";
HO_TEAM1 = "Server Chooses";
INSTANT_ACTION_HEADER = "INSTANT ACTION";
ISPTYPE_1000K = "1MB (DSL)";
ISPTYPE_100K = "100K (ISDN)";
ISPTYPE_1100K = "1.1MB (DSL)";
ISPTYPE_1250K = "1.25MB (DSL)";
ISPTYPE_128K = "128K (Cable/DSL)";
ISPTYPE_144K = "144K (Cable/DSL)";
ISPTYPE_1544K = "1.54MB (T1)";
ISPTYPE_192K = "192K (Cable/DSL)";
ISPTYPE_256K = "256K (Cable/DSL)";
ISPTYPE_350K = "350K (Cable/DSL)";
ISPTYPE_384K = "384K (Cable/DSL)";
ISPTYPE_44736K = "44.736MB (T3)";
ISPTYPE_512K = "512K (Cable/DSL)";
ISPTYPE_60K = "60K (ISDN)";
ISPTYPE_640K = "640K (Cable/DSL)";
ISPTYPE_64K = "64K (ISDN)";
ISPTYPE_768K = "768K (Cable/DSL)";
ISPTYPE_80K = "80K (ISDN)";
ISPTYPE_MODEM = "Modem";
JG_JOIN = "{hot}Join";
JG_SEARCH = "{hot}Search";
JG_STOP = "S{hot}top Search";
JOINING_GAME_TITLE = "JOIN GAME";
LOADOUT_ACCESSORY = "Accessories:";
LOADOUT_CUSTOM = "{hot}Change Loadout";
LOADOUT_DEFAULT = "Use {hot}Default";
LOADOUT_PRIMARY = "Primary Weapon:";
LOADOUT_SECONDARY = "Secondary Weapon:";
LOADSLOT_LABEL = "%%d. [%%02dh %%02dm %%02ds]";
LOAD_GAME = "Load Game";
LOCALFILE_PREFIX = "*";
LoadGame = "{hot}Load Saved Mission...";
LoadGameSelect = "Select A Save Game";
MACRO_00 = "How do you suck blood?";
MACRO_01 = "This is macro 01";
MACRO_02 = "This is macro 02";
MACRO_03 = "This is macro 03";
MACRO_04 = "This is macro 04";
MACRO_05 = "This is macro 05";
MACRO_06 = "This is macro 06";
MACRO_07 = "This is macro 07";
MACRO_08 = "This is macro 08";
MACRO_09 = "This is macro 09";
MAIN_DEVTEST = "Development";
MAX_SAVES_AVAIL = "Maximum Saves Available: %%d";
MISSION = "{hot}Mission View";
MISSION_UNK = "Mission";
MM_Browse = "{hot}NOVALOGIC.COM";
MM_Campaign = "{hot}CAMPAIGN";
MM_ChangePilot = "{hot}PLAYER INFO";
MM_Credits = "CREDITS";
MM_Currentpilot = "Current Player:";
MM_Exit = "E{hot}XIT GAME";
MM_MainMenu = "MAIN MENU";
MM_Multiplayer = "{hot}MULTIPLAYER";
MM_Options = "{hot}OPTIONS";
MM_QuickMission = "{hot}QUICK MISSION";
MM_QuickSetup = "{hot}QUICK SETUP";
MM_SinglePlayer = "{hot}SINGLE PLAYER";
MM_Update = "{hot}UPDATE GAME";
MM_VersionNumber = "MM_VersionNumber";
MOUSE_SENSITIVITY = "Mouse Sensitivity";
MP_1MNT = "1 minute";
MP_2MNT = "2 minutes";
MP_3MNT = "3 minutes";
MP_CHAROPT = "Character Options";
MP_CHARSLCT = "Character Select";
MP_CHAR_TYPE = "Character Type";
MP_CONNECT_TYPE = "{hot}Play On";
MP_Ctype = "Element List MP_CType";
MP_GAMES_FOUND = "Games Found";
MP_HOSTGAME = "{hot}Host Game";
MP_HO_ERROR_1 = "Error - Could not initialize the provider type.";
MP_HO_ERROR_2 = "Error - Could not create a  host session.";
MP_HO_ERROR_3 = "Error - Could not create a host player.";
MP_HO_ERROR_4 = "Error - A search abort occured for the statistic server.";
MP_HO_ERROR_UNK = "Error - An unknown error occured while trying to host a session.";
MP_HO_NO_ERROR = "Click Start Hosting to begin serving a game.";
MP_HO_SELECT_GAME = "Select a game to begin hosting.";
MP_IMED = "No Delay";
MP_IPX = "LAN IPX";
MP_JOINGAME = "{hot}Join Game";
MP_LANIP = "LAN IP";
MP_Modem = "Modem";
MP_NOVA = "{hot}NovaWorld";
MP_Novaworld = "NovaWorld";
MP_NullM = "Null Modem";
MP_SEARCH = "{hot}Search";
MP_SRVPLAY = "Element List MP_SRVPLAY";
MP_SSEARCH = "{hot}Element List";
MP_STATUS_NOTHING = "Click Search to begin";
MP_STATUS_NOVA = "Click Join Game to Launch NovaWorld";
MP_STATUS_SEARCHING = "Searching";
MP_STATUS_STRING = "MP_STATUS_STRING";
MP_STEAMSLCT = "Element List MP_STEAMSLCT";
MP_STOP = "{hot}Stop Search";
MP_Sdelay = "Element List MP_SDELAY";
MP_TEAM_ANY = "Either";
MP_TEAM_BLUE = "Blue";
MP_TEAM_PREFERENCE = "{hot}Team Preference";
MP_TEAM_RED = "Red";
MULTIPLAYER = "MULTIPLAYER";
MULTI_EULA = "THIS AGREEMENT DESCRIBES THE TERMS ON WHICH NOVALOGIC, INC. OFFERS YOU ACCESS TO AN ACCOUNT (THE "ACCOUNT") TO PLAY A NOVALOGIC SOFTWARE PRODUCT (THE "GAME") ONLINE VIA NOVAWORLD. BY PRESSING THE "I ACCEPT" BUTTON, YOU ACCEPT THE TERMS AND CONDITIONS BELOW. BY PRESSING THE "DECLINE" BUTTON, YOU DECLINE OUR OFFER. If you have any questions regarding these terms and conditions, please contact customer service at support@novalogic.com.

1. Accounts are available only to adults or, in their discretion, their minor child. If you are a minor, your parent(s) or guardian(s) must complete the registration process, in which case they will take full responsibility for all obligations under this Agreement. By clicking on "I Accept", you represent that you are an adult and are either accepting this Agreement on behalf of yourself or your child. You may not transfer or share your Account with anyone, except that if you are a parent or guardian, you may permit one child to use the Account instead of you (in which case you may not use that Account). You may only have one player using the Account at any given time. You are liable for all activities conducted through the Account, and parents or guardians are liable for the activities of their child. Corporations and other entities are not eligible to procure Accounts.

2. To play the Game online, you must (a) purchase the Game CD-ROM (the "CD-ROM"), which includes software required for the Game (the "Software"), (b) have a valid Account, and (c) have an Internet connection (which we do not provide) to access your Account. You are responsible for paying all applicable taxes (including those we are not required to collect) and for all hardware, software, service and other costs you incur to access your Account. Neither this Agreement nor your Account entitles you to any subsequent releases of the Software, nor to any expansion packs or similar ancillary products. You understand that we may update or otherwise enhance the Software at any time and in doing so incur no obligation to furnish such updates to you pursuant to this Agreement.

3. Subject to the terms of this Agreement, we hereby grant to you a non-exclusive license to use the Software solely in connection with playing the Game via an authorized Account. You may not copy (except to make one necessary back-up copy), distribute, rent, lease, loan, modify or create derivative works, adapt, translate, perform, display, sublicense or transfer the Software. You may not copy any of the written materials accompanying the CD-ROM. You may not reverse engineer, disassemble or decompile the Software except to the extent that this restriction is expressly prohibited by applicable law. The Software may contain license management software that restricts your use of the Software.

4. We and our suppliers shall retain ownership of all intellectual property rights relating to or residing in the CD-ROM, the Software and the Game. The Software is a "commercial item".

5. You may not use any third party software to modify the Software to change Game play. You may not use our intellectual property rights contained in the Game or the Software to create or provide any other means through which the Game may be played by others, as through server emulators. You may not take any action which imposes an unreasonable or disproportionately large load on our infrastructure. You may not sell or auction any of the Game's players, items, or copyrighted material including CD-ROM games.

6. We may amend this Agreement at any time in our sole discretion. Amendments shall be communicated to you at the time you log into your Account. Such amendments shall be effective whenever we make the notification available for your review. We may change the term of service offered at any time, including both features and pricing.

7. We may terminate this Agreement (including your Software license and your Account) immediately and without notice if you breach this Agreement or repeatedly infringe any third party intellectual property rights, or if we are unable to verify or authenticate any information you provide to us, or upon gameplay, chat or any player activity whatsoever which is, in our sole discretion, inappropriate and/or in violation of the spirit of the Game as set forth in the player rules of conduct, which are posted on http://www.novaworld.com and http://www.novalogic.com. If we terminate this Agreement under these circumstances, you will lose access to your account, in which case no refund will be provided of any fees paid. We may also terminate this Agreement if we decide, in our sole discretion, to discontinue offering the Game, in which case no refund will be provided of any fees paid. We may also modify and/or reset any and all account information at any time, for any reason.

8. You may not disclose your password to any third party. We never ask you for your password by telephone or email, and you should not disclose it this way if someone asks you to do so. There may be an additional charge to reissue lost passwords.

9. For your account name and identity names, you are encouraged to use a pseudonym, especially if you are a minor. You may not use an account name or identity name that violates anyone's trademarks, publicity rights or other proprietary rights, or the code of conduct.

10. As part of your Account, you can upload content to our servers in various forms, such as in the selections you make for the Game and in chat and similar user-to-user areas (collectively, your "Content"). Your Content shall not: (a) infringe any third party intellectual property, other proprietary or publicity/privacy rights; (b) violate any law or regulation; (c) be defamatory, obscene, child pornographic or harmful to minors; or (d) contain any viruses, trojan horses, worms, time bombs, cancelbots or other computer programming routines that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or personal information. We may take any action with respect to your Content if we believe it may create liability for us or may cause us to lose (in whole or in part) the services of our ISPs or other suppliers. You hereby grant to us a worldwide, perpetual, irrevocable, royalty-free, sublicenseable (through multiple tiers) right to exercise all intellectual property rights, in any media now known or not currently known, associated with your Content.

11. You shall comply with all applicable laws regarding your use of the Software, your access to your Account and your playing of the Game. Without limiting the foregoing, you may not download, use or otherwise export or re-export the Software except in full compliance with all applicable laws and regulations.

12. We cannot ensure that your private communications and other personally identifiable information will not be disclosed to third parties. For example, we may be forced to disclose information to the government or third parties under certain circumstances, or third parties may unlawfully intercept or access transmissions or private communications. Additionally, we can (and you authorize us to) disclose any information about you to private entities, law enforcement or other government officials as we, in our sole discretion, believe necessary or appropriate to investigate or resolve possible problems or inquiries. Furthermore, if you request any technical support, you consent to our remote accessing and review of the computer you load the Software onto for purposes of support and debugging. You agree that we may communicate with you via email and any similar technology for any purpose relating to the Game, the Software and any services or software which may in the future be provided by us or on our behalf. You are subject to the terms and conditions, privacy customs and policies of NovaLogic while on NovaWorld. Solely for the purpose of patching and updating the Game, you hereby grant us permission to (i) upload Game file information from the Game directory and (ii) download Game files to you.

13. WE PROVIDE THE CD-ROM, THE SOFTWARE, THE ACCOUNT, THE GAME AND ALL OTHER SERVICES "AS IS." WE AND OUR SUPPLIERS EXPRESSLY DISCLAIM ALL WARRANTIES OR CONDITIONS OF ANY KIND, EXPRESS, IMPLIED OR STATUTORY, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF TITLE, NONINFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Without limiting the foregoing, we do not ensure continuous, error-free, secure or virus-free operation of the CD-ROM, the Software, the Game or your Account. Some states do not allow the disclaimer of implied warranties, so the foregoing disclaimer may not apply to you. This warranty gives you specific legal rights and you may also have other legal rights which vary from state to state. We are not liable for any delay or failure to perform resulting from any causes beyond our reasonable control. Further, we cannot and do not promise or ensure that you will be able to access your Account whenever you want, and there may be extended periods of time when you cannot access your Account.

14. IN NO EVENT SHALL WE, OUR PARENT, OUR AFFILIATES OR OUR SUPPLIERS BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY LOST PROFITS OR SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES (HOWEVER ARISING, INCLUDING NEGLIGENCE) ARISING OUT OF OR IN CONNECTION WITH YOUR ACCOUNT, THE GAME, THE CD-ROM OR THIS AGREEMENT. OUR LIABILITY TO YOU OR ANY THIRD PARTIES IS LIMITED TO THE CURRENT MONTHLY SERVICE FEE. Some states do not allow the foregoing limitations of liability, so they may not apply to you.

15. This Agreement is governed in all respects by the laws of the State of California as such laws are applied to agreements entered into and to be performed entirely within California between California residents. The UN Convention on Contracts for the International Sale of Goods is expressly disclaimed. Both parties submit to personal jurisdiction in California and further agree that any cause of action relating to this Agreement shall be brought in a court in Los Angeles County, California. If any provision of this Agreement is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced. Our failure to act with respect to a breach by you or others does not waive our right to act with respect to subsequent or similar breaches. You may not assign or transfer this Agreement or your rights hereunder, and any attempt to the contrary is void. This Agreement sets forth the entire understanding and agreement between us and you with respect to the subject matter hereof. Except as provided above, this Agreement may not be amended except in a writing signed by both parties.

16. All services hereunder are offered by NovaLogic, Inc., located at 26010 Mureau Road, Calabasas, CA, 91302. Our phone number is (818) 878-0325. Current rates for using the Game may be obtained from www.novalogic.com, and such rates are subject to change at any time. If you are a California resident, you may have this same information emailed to you by sending a letter to the foregoing address with your email address and a request for this information.

The Complaint Assistance Unit of the Division of Consumer Services of the Department of Consumer Affairs may be contacted in writing at 400 R Street, Sacramento, CA 95814, or by telephone at (800) 952-5210.

Parental control protections (such as computer hardware, software, or filtering services) are commercially available that may assist you in limiting access to material that is harmful to minors. If you are interested in learning about these protections, information is available at http://www.lycoszone.com/parentszn.html or other similar sites providing information on such protections.
";
MULTI_EULA_TITLE = "USER AGREEMENT AND SOFTWARE LICENSE";
MultiPlayerStats = "Multiplayer Stats";
Multi_Player = "Multiplayer";
Multi_StatLabel_1 = "Enemy Kills:";
Multi_StatLabel_10 = "PSP Attempts:";
Multi_StatLabel_11 = "PSP Captures:";
Multi_StatLabel_2 = "Deaths:";
Multi_StatLabel_3 = "Time in the Zone:";
Multi_StatLabel_4 = "Flags Captured:";
Multi_StatLabel_5 = "Flags Saved:";
Multi_StatLabel_6 = "Targets Destroyed:";
Multi_StatLabel_7 = "Shots Fired:";
Multi_StatLabel_8 = "Medic Saves:";
Multi_StatLabel_9 = "Revived:";
NAV_Accept = "{hot}OK";
NAV_Back = "{hot}BACK";
NAV_Exit = "E{hot}XIT";
NEW_GAME = "New Game";
NONE = "None";
NOVAWORLD = "NOVAWORLD";
NO_BRIEFING = "No briefing available.";
OPT_AVOptions = "!Audio/Video Options";
OPT_Action = "Action";
OPT_Additional = "{hot}Intermediate";
OPT_Advanced = "Adva{hot}nced";
OPT_Altitude = "Change Altitude";
OPT_Audio = "{hot}Audio";
OPT_Axis = "Axis";
OPT_Basic = "Ba{hot}sic";
OPT_BitDepth = "Bit Depth";
OPT_Both = "Both";
OPT_CHNGDRVR = "Change Video";
OPT_ClrDpth = "Element List OPT_ClrDpth";
OPT_Colordepth = "!Color Depth";
OPT_Control = "Control";
OPT_Controls = "{hot}Controls";
OPT_Credits = "Cre{hot}dits";
OPT_Default = "Game Defaults";
OPT_DialVol = "Dialog Volume";
OPT_Difficulty = "Difficulty Level";
OPT_Driver = "!Current 3D Driver";
OPT_EnableThrottle = "Enable Throttle";
OPT_FS_AntiAlias = "Full Screen Antialias";
OPT_FXVol = "!Effects Volume";
OPT_Fantail = "Mix Fantail with Cyclic (Coordinated Turns)";
OPT_FlightCtrl = "Flight Control:";
OPT_FlightModel = "Flight Model";
OPT_ForceFeedback = "Force Feedback";
OPT_GENERAL = "{hot}General";
OPT_Gameplay = "{hot}Gameplay";
OPT_Gamma = "Gamma";
OPT_GroundEffect = "Ground Effect";
OPT_HML = "Element List OPT_HML";
OPT_HatControls = "Hat Switch Controls:";
OPT_HatSwitch = "Enable Hat Switch";
OPT_HatTurn = "Altitude and Turns";
OPT_HatWeapon = "Altitude and Weapons Select";
OPT_Inv_Y_Joy = "Invert Joystick Y axis";
OPT_Inv_Y_Mouse = "Invert Mouse Y Axis";
OPT_JBTN = "JoyBtn";
OPT_JOYSTICK = "{hot}Joystick";
OPT_JoyControls = "Joystick Controls:";
OPT_JoyStrafe = "Strafe with joystick";
OPT_JoyTurn = "Turn with joystick";
OPT_JoyTurnStrafe = "Turn with Joystick (Disable Joystick Strafe)";
OPT_Key = "Key";
OPT_Keyboard = "{hot}Keyboard";
OPT_LimitCyclic = "Limit Cyclic Range";
OPT_MJBTN = "Mod_JoyBtn";
OPT_MKEY = "Mod_Key";
OPT_MMSE = "Mod_Mouse";
OPT_MVola = "!Windows System";
OPT_Mouse = "{hot}Mouse";
OPT_MusVol = "Music Volume";
OPT_Music = "!Music";
OPT_NH = "Element List OPT_NH";
OPT_ObjectDetail = "Object Detail";
OPT_OnOff = "Element List OPT_OnOff";
OPT_PIOControl = "PIO Control";
OPT_ParticleDensity = "Particle Density";
OPT_PlayCredits = "Play Credits";
OPT_PlayCreditsNow = "Play Credits Now";
OPT_PlayEndingNow = "Play Ending Now";
OPT_PlayIntro = "Play Intro Cinematic";
OPT_PlayIntroNow = "Play Intro Now";
OPT_PlayIreneNow = "Play "Irene" Movie Now";
OPT_RealRotorDamage = "Heavy Rotor Damage";
OPT_Remap = "{hot}Remap";
OPT_Resolution = "Resolution";
OPT_ReverseRudder = "Reverse Rudder";
OPT_ReverseThrottle = "Reverse Throttle";
OPT_RotorVol = "Rotor Volume";
OPT_Rudder = "Rudder";
OPT_SFXVol = "Sound Effects Volume";
OPT_ShadowQuality = "Shadows";
OPT_SlipControl = "Slip Control";
OPT_TEXTRES = "Element List OPT_TEXTRES";
OPT_Targ_Device = "Targeting Device:";
OPT_Targ_Easy = "Cycle Targets";
OPT_Targ_Easy_Joy = "Cycle Targets
Preferred method for targeting with a joystick.  Pressing Cycle Target will select the most appropriate target based on lethality and proximity.  Pressing Cycle Target again will select the next most lethal target in the list, etc.";
OPT_Targ_Easy_Mouse = "Cycle Targets
This mode can be better for beginners.  Pressing Cycle Target will select the most appropriate target based on lethality and proximity.  Pressing Cycle Target again will select the next most lethal target in the list, etc.";
OPT_Targ_Manual = "Nearest Target";
OPT_Targ_Manual_Joy = "Nearest Target
In this mode, you must line the helicopter up with your target before you can get an active lock.  When you press the cycle target button, you will get a lock on the target closest to your crosshairs.";
OPT_Targ_Manual_Mouse = "Nearest Target
Usually preferred for precise mouse targeting, this setup functions as a traditional first person shooter.  When you press the cycle target button, you will get a lock on the target closest to your crosshairs.";
OPT_TargetFriendlies = "Target Friendlies";
OPT_Targeting = "Targeting Mode:";
OPT_TerrainDetail = "Terrain Detail";
OPT_TerrainGeo = "!Terrain Geometry";
OPT_TextureQuality = "Texture Quality";
OPT_Throttle = "Throttle";
OPT_TwistingStick = "Enable Twisting Stick or Rudder Pedals";
OPT_Update = "{hot}Update Game";
OPT_UseMouseTargeting = "Do you want to use the mouse for targeting?";
OPT_UserDef = "User Defaults";
OPT_Video = "{hot}Video";
OPT_View = "Default View:";
OPT_View_1st = "1st Person";
OPT_View_External = "3rd Person";
OPT_View_Sim = "Cockpit";
OPT_WDMSOUND = "Select WDM Sound (5.1)";
OPT_WaterQuality = "Water Quality";
OPT_WeaponCycle = "Cycle Weapons";
OPT_YesNo = "Element List OPT_YesNo";
OPT_ZboardDef = "Zboard Defaults";
PLAYER_ATTEMPTS = "Attempts";
PLAYER_AUTOMEDIC = "Medic Revive Consent";
PLAYER_AUTORELOAD = "Auto-Reload Weapon";
PLAYER_CAMPAIGNS = "Campaigns";
PLAYER_CHARTYPE = "Character Type";
PLAYER_DEATHS = "Deaths:";
PLAYER_DETAIL = "{hot}Details";
PLAYER_FAILURES = "Failures";
PLAYER_FLAGS_CAPTURED = "Flags Captured:";
PLAYER_FLAGS_SAVED = "Flags Saved:";
PLAYER_FRATS = "Friendly Kills:";
PLAYER_GAMES_LOST = "Games Lost:";
PLAYER_GAMES_WON = "Games Won:";
PLAYER_KILLS = "Enemy Kills:";
PLAYER_KILLS_AIR = "Air Kills:";
PLAYER_KILLS_FRIENDLY = "Friendly Casualties:";
PLAYER_KILLS_GROUND = "Ground Kills";
PLAYER_KILLS_INFANTRY = "Infantry Kills";
PLAYER_MEDIC_SAVED = "Revived:";
PLAYER_MEDIC_SAVES = "Medic Saves:";
PLAYER_MISSION = "Missions";
PLAYER_MISSIONS_WON = "Games Won:";
PLAYER_MISSION_AIRKILLS = "Air Kills:";
PLAYER_MISSION_COMP = "Missions Completed:";
PLAYER_MISSION_FRIENDLY = "Friendly Kills:";
PLAYER_MISSION_GROUNDKILLS = "Ground Kills:";
PLAYER_MISSION_OBJECTIVES = "Objectives:";
PLAYER_MISSION_RANK = "Rank:";
PLAYER_MISSION_SCORE = "Point Score:";
PLAYER_MULTI = "Multiplayer Stats";
PLAYER_OBJECTIVES = "Objectives";
PLAYER_PSP_ATTEMPTS = "PSP Attempts:";
PLAYER_PSP_CAPTURES = "PSP Captures:";
PLAYER_RANK = "Rank";
PLAYER_SCORE = "Total Score";
PLAYER_SHOTS = "Shots Fired:";
PLAYER_SINGLE = "Single Player Stats";
PLAYER_SPK = "Shots Per Kill:";
PLAYER_STATS = "Player Statistics";
PLAYER_STAT_DETAIL = "Player Statistics - Details";
PLAYER_STAT_SUMMARY = "Player Statistics - Summary";
PLAYER_SUBGOALS_COMPLETED = "Goals Completed";
PLAYER_SUMMARY = "{hot}Summary";
PLAYER_TARGETS = "Targets";
PLAYER_TARGETS_DESTROYED = "Targets Destroyed:";
PLAYER_TIMEINZONE = "Time in the Zone:";
PLAYER_TITLE = "PLAYER SELECT";
PLAYER_WINS = "Wins";
PRIMARY = "Primary Weapon";
PSET_AllMap = "Input Mapping";
PSET_INTRO = "INTRO/CREDITS";
PSET_KEYMAP = "KEYBOARD REMAP";
PSET_Key = "KEYBOARD";
PSET_Macros = "MESSAGE MACROS";
Players = "Pilots";
QS1_TITLE = "DEFAULT VIEW";
QS2_TITLE = "JOYSTICK PREFERENCE";
QS3_TITLE = "JOYSTICK SETUP";
QS4_TITLE = "JOYSTICK TARGETING";
QS5_TITLE = "MOUSE TARGETING";
QS_DEMO = "START {hot}DEMO";
REMAP_Joystick = "To remap an Action, left-click on the corresponding Control button.  Then press the joystick button you would like to use.  To cancel the remap attempt, press the Esc key.";
REMAP_Keyboard = "To remap an Action, left-click on the corresponding Control button.  Then press the keyboard key you would like to use.  To cancel the remap attempt, press the Esc key.";
REMAP_Mouse = "To remap an Action, left-click on the corresponding Control button.  Then press the mouse button or mousewheel direction you would like to use.  To cancel the remap attempt, press the Esc key.";
RESOLUTION = "Resolution";
RES_1024x768 = "1024x768";
RES_1280x1024 = "1280x1024";
RES_1600x1200 = "1600x1200";
RES_320x240 = "320x240";
RES_400x320 = "400x320";
RES_512x384 = "512x384";
RES_640x480 = "640x480";
RES_800x600 = "800x600";
Rename_Player = "{hot}Rename Player";
SCORE = "SCORE";
SECONDARY = "Secondary Weapon";
SELECT_CAMPAIGN = "Select a campaign to begin.";
SELECT_MISSION = "Select a mission to begin.";
SP_Archives = "MISSION ARCHIVES";
SP_CampaignStatus = "CAMPAIGN STATUS";
SP_Campaigns = "CAMPAIGNS";
SP_MissionDesc = "MISSION BRIEFING";
START_MISSION = "{hot}New Mission";
SinglePlayerStats = "Single Player Stats";
Single_Player = "Single Player";
Single_StatLabel_1 = "Missions Completed:";
Single_StatLabel_10 = " ";
Single_StatLabel_11 = " ";
Single_StatLabel_2 = "Goals Completed:";
Single_StatLabel_3 = "Air Kills:";
Single_StatLabel_4 = "Vehicles Destroyed:";
Single_StatLabel_5 = "Enemy Infantry Kills:";
Single_StatLabel_6 = "Non-Combatants Lost:";
Single_StatLabel_7 = "Friendlies Lost:";
Single_StatLabel_8 = " ";
Single_StatLabel_9 = " ";
TEAM_PASSWORD = "Team Password";
TIME_DAYS = "d";
TIME_HOURS = "h";
TIME_MINUTES = "m";
TIME_SECONDS = "s";
TT_16 = "16 Bits";
TT_32 = "32 Bits";
TT_Advanced = "Operator";
TT_Easy = "Easy";
TT_High = "High";
TT_Highest = "Highest";
TT_Low = "Low";
TT_Medium = "Medium";
TT_NO = "No";
TT_Normal = "Normal";
TT_OFF = "Off";
TT_ON = "On";
TT_YES = "Yes";
TXTCOMP_MVOLA = "TXTCOMP_MVOLA";
UNDER_CONSTRUCTION = "Under Construction";
WD_ACCEPT = "{hot}Accept";
WD_ACCESSORIES = "Accessories";
WD_CANCEL = "{hot}Cancel";
WD_CHARACTERTYPECHANGE = "Character Type";
WD_GRENADE = "Grenades";
WD_GRENADE_CS = "CS Gas";
WD_GRENADE_FLASH = "Flashbang";
WD_GRENADE_FRAG = "Fragmentation";
WD_GRENADE_SMOKE = "Smoke";
WD_PRIMARY = "Primary Weapon";
WD_SECONDARY = "Secondary Weapon";
WEAP_DESC_300MAG = "Ammo Type:  .300 Magnum
Rounds Per Clip:  4
Rounds Carried:  180";
WEAP_DESC_AT4 = "Ammo Type:  Anti-Tank Rocket
Rounds Carried:  1";
WEAP_DESC_BARRET = "Ammo Type:  .50 BMG
Rounds Per Clip:  10
Rounds Carried:  100";
WEAP_DESC_CAR15 = "Ammo Type:  5.56 x 45mm
Rounds Per Clip:  30
Rounds Carried:  300";
WEAP_DESC_CAR15M203 = "Ammo Type:  5.56 x 45mm, HE grenades
Rounds Per Clip:  30, 1
Rounds Carried:  300, 10";
WEAP_DESC_CLAYMORE = "Ammo Type:  Directional Mine
Mines Carried: 2";
WEAP_DESC_COLT45 = "Ammo Type:  .45 automatic
Rounds Per Clip:  7
Rounds Carried:  28";
WEAP_DESC_FNMAG = "Ammo Type:  7.62 x 51mm
Rounds Per Clip:  200
Rounds Carried:  600";
WEAP_DESC_M16 = "Ammo Type:  5.56 x 45mm
Rounds Per Clip:  30
Rounds Carried:  300";
WEAP_DESC_M16M203 = "Ammo Type:  5.56 x 45mm, HE grenades
Rounds Per Clip:  30, 1
Rounds Carried:  300, 10";
WEAP_DESC_M21 = "Ammo Type:  7.62 x 51mm
Rounds Per Clip:  20
Rounds Carried:  200";
WEAP_DESC_M24 = "Ammo Type:  7.62 x 51mm
Rounds Per Clip:  6
Rounds Carried:  180";
WEAP_DESC_M60 = "Ammo Type:  7.62 x 51mm
Rounds Per Clip:  200
Rounds Carried:  600";
WEAP_DESC_M9BERETTA = "Ammo Type:  9mm
Rounds Per Clip:  15
Rounds Carried:  30";
WEAP_DESC_MP5 = "Ammo Type:  9mm
Rounds Per Clip:  30
Rounds Carried:  300";
WEAP_DESC_SATCHEL = "Ammo Type:  C4
Satchels Carried:  2";
WEAP_DESC_SAW = "Ammo Type:  5.56mm
Rounds Per Clip:  200
Rounds Carried:  600";
WEAP_DESC_SHOTGUN = "Ammo Type:  00 Buck
Rounds Per Clip:  7
Rounds Carried:  14";
WPN_AVAIL_ALWAYS = "Always";
WPN_AVAIL_ARMORY = "Armory Only";
WPN_AVAIL_MAP_DEFAULT = "Map Default";
WPN_AVAIL_NEVER = "Never";
tCOMPSoundFXVol = "tCOMPSoundFXVol";
tCOMP_Pilot = "tCOMP_Pilot";
WEAP_DESC_PSG1 = "Ammo Type:  7.62 x 51mm
Rounds Per Clip:  20
Rounds Carried:  200";
WEAP_DESC_G3 = "Ammo Type:  7.62 x 51mm
Rounds Per Clip:  20
Rounds Carried:  300";
WEAP_DESC_G36 = "Ammo Type: 5.56 x 45mm
Rounds Per Clip: 30
Rounds Carried: 300";

'[MenuStats]'
`,
  "resources/game_strings/gametext.bin": `'[Hud]'
HUD_Clock = "MTC";
Hud_Bay = "Bay";
Hud_Gear = "Gear";
Hud_LMFree = "Free";
Hud_LMLocked = "Locked";
Hud_LookMode = "View";
Hud_Malfunction = "Damage";
Hud_Target = "Targets";
Hud_mission = "Mission";
Vertspeed = "ASL";
WPN_20MM = "Cannon";
WPN_Arty = "Artillery";
WPN_HYDRA70 = "Hydra";
WPN_Hellfire = "Hellfire";
WPN_Stinger = "Stinger";
WPN_Wingman = "Wingman";
altitude = "AGL";
hud_farp = "m to FARP";
hud_icon_armoury = "Armory";
hud_icon_bldg = "Structure";
hud_icon_bridge = "Bridge";
hud_icon_emplaced = "Emplaced Weapon (50cal)";
hud_icon_emplaced2 = "Emplaced Weapon (Grenade Launcher)";
hud_icon_flag = "Flag";
hud_icon_flagbay = "Flag Bay";
hud_icon_helo = "Helicopter";
hud_icon_helopad = "Helicopter Landing Pad";
hud_icon_medic = "Player (Medic)";
hud_icon_mine = "(My Team)";
hud_icon_person = "Player / Person";
hud_icon_persondead = "Dead Player / Person";
hud_icon_personmedicable = "Dead Player (Revivable)";
hud_icon_plane = "Airplane";
hud_icon_psp = "Player Spawn Point";
hud_icon_pwrammo = "Ammo Box";
hud_icon_pwrmed = "Med Pack";
hud_icon_theres = "(Enemy Team)";
hud_icon_vehicle = "Vehicle";
hud_icon_watervehicle = "Water Craft / Boat / Ship";
hud_icon_waypoint = "Waypoint";
hud_map_legend = "Map Legend";
hud_noautolock = "None";
hud_scope_mag = "Mag: %dx";
hud_scope_zero = "Elevation: %dm";
hud_scope_zero_auto = "Elevation: Auto";
hud_scope_zero_none = "Elevation: None";
hud_takedown = "Room Takedown Press";
hud_targeting = "Targeting";
ldo_artillery = "Artillery:";
ldo_cannon = "Cannon:";
ldo_efamsempty = "EFAMS Depleted";
ldo_flares = "Flares:";
ldo_hellfire = "Hellfire:";
ldo_hydra = "Hydra:";
ldo_stinger = "Stinger:";
mto = "m to";
speed = "KTS";
tgt_cycle = "Cycle";
tgt_near = "Nearest";
tourque = "TRQ";
wm_10_meters = "10 Meters";
wm_2_meters = "2 Meters";
wm_3_meters = "3 Meters";
wm_4_meters = "4 Meters";
wm_5_meters = "5 Meters";
wm_6_meters = "6 Meters";
wm_7_meters = "7 Meters";
wm_8_meters = "8 Meters";
wm_9_meters = "9 Meters";
wm_abreast = "Skirmish Line";
wm_bottom = "Press (ESC) to exit menu";
wm_echelon_left = "Echelon Left";
wm_echelon_right = "Echelon Right";
wm_f2fire_at_will = "Fire at will - Fireteam two";
wm_f2guard = "Hold position - Fireteam two";
wm_f2hold_fire = "Hold fire - Fireteam two";
wm_f2regroup = "Follow me - Fireteam two";
wm_fire_at_will = "Fire at will - All";
wm_flashbang = "Throw Flashbang";
wm_formation = "Set Formation";
wm_frag = "Throw Frag Grenade";
wm_guard = "Hold position - All";
wm_hold_fire = "Hold fire - All";
wm_line = "Column";
wm_regroup = "Follow me - All";
wm_spacing = "Team Spacing";
wm_stackup = "Stack";
wm_takedown = "Auto area takedown";
wm_title = "Team Commands";
wm_wedge = "Wedge";

'[Server]'
MS = "ms";
STRSRV01 = "unused";
STRSRV02 = "Novaworld Server:";
STRSRV03 = "Host:";
STRSRV04 = "Games Won:";
STRSRV05 = "Red";
STRSRV06 = "Blue";
STRSRV07 = "Ties";
STRSRV08 = "Current Score:";
STRSRV09 = "Receive Port:";
STRSRV10 = "Frames:";
STRSRV11 = "Total Logins:";
STRSRV12 = "Total Sent:";
STRSRV13 = "Total Received:";
STRSRV14 = "$A is joining the game.";
STRSRV15 = "$A has left the game.";
STRSRV16 = "We lost the Session!";
STRSRV17 = "CPU:";
STRSRV18 = "Ban:";
STRSRV19 = "Host";
STRSRV20 = "Punting:";
STRSRV21 = "Bozo Filter On:";
STRSRV22 = "Bozo Filter Off:";
STRSRV23 = "Player List: ID/Score/Name";
STRSRV24 = "Start Timer:";
STRSRV25 = "Current Logins:";
STRSRV26 = "was denied entry because client has a older version.";
STRSRV27 = "was denied entry because demo time has expired.";
STRSRV28 = "was denied entry because client provided incorrect key.";
STRSRV29 = "was denied entry because client has a newer version.";
STRSRV30 = "was denied entry because client is incompatible with server.";
STRSRV31 = "was denied entry because client provided incorrect squad password.";
STRSRV32 = "was denied entry because client has been banned from this server.";
STRSRV33 = "was denied entry because game is closed.";
STRSRV34 = "was denied entry due to incompatible weapon configuration.";
STRSRV35 = "was denied entry because NovaWorld login credentials are absent, expired, or invalid.";
STRSRV_MEDREQ = "%s is requesting medical attention!";
STRSRV36 = "was denied entry because the connection between us does not meet the minimum specification.";

'[Client]'
STRCLI01 = "Unknown";
STRCLI02 = "You have $A minutes left in this game.";
STRCLI03 = "NovaWorld";
STRCLI04 = "Number of players:";
STRCLI05 = "Blue Team";
STRCLI06 = "Red Team";
STRCLI07 = "Blue Team (of";
STRCLI08 = "Red Team (of";
STRCLI09 = "Player List: Rank/ID/Name";
STRCLI10 = "Weapons Updated";
STRCLI11 = "$A is joining the game";
STRCLI12 = "$A is joining the game (Blue)";
STRCLI13 = "$A is joining the game (Red)";
STRCLI14 = "$A is joining the game (Yellow)";
STRCLI15 = "$A is joining the game (Violet)";
STRCLI16 = "$A is leaving the game";
STRCLI17 = "Yellow Team";
STRCLI18 = "Violet Team";
STRCLI19 = "Green Team";
STRCLI20 = "- Attacking";
STRCLI21 = "- Defending";

'[NovaWorld]'
STRNOVA01 = "Cooperative";
STRNOVA02 = "Deathmatch";
STRNOVA03 = "Team Deathmatch";
STRNOVA04 = "King of the Hill";
STRNOVA05 = "Team King of the Hill";
STRNOVA06 = "Capture the Flag";
STRNOVA07 = "Jungle";
STRNOVA08 = "Desert";
STRNOVA09 = "Snow";
STRNOVA10 = "NA";
STRNOVA11 = "Y";
STRNOVA12 = "N";
STRNOVA13 = "Search & Destroy";
STRNOVA14 = "Attack & Defend";
STRNOVA15 = "FlagBall";
STRNOVA16 = "FlagMatch";

'[HelpScreenKeys]'
' = "'";
- = "-";
. = ".";
/ = "/";
; = ";";
= = "=";
ACCEPT = "Accept";
ADD = "Numpad +";
APPS = "Apps";
ATTN = "Attn";
Alt- = "Alt - ";
BACK = "Backspace";
CANCEL = "Cancel";
CAPITAL = "Caps Lock";
CLEAR = "Clear";
CONTROL = "Ctrl";
CONVERT = "Convert";
CRSEL = "CRSEL";
Ctrl- = "Ctrl - ";
DECIMAL = "Numpad .";
DELETE = "Delete";
DIVIDE = "Numpad /";
DOWN = "Down";
END = "End";
EREOF = "EREOF";
ESCAPE = "Esc";
EXECUTE = "Execute";
EXSEL = "EXSEL";
F1 = "F1";
F10 = "F10";
F11 = "F11";
F12 = "F12";
F13 = "F13";
F14 = "F14";
F15 = "F15";
F16 = "F16";
F17 = "F17";
F18 = "F18";
F19 = "F19";
F2 = "F2";
F20 = "F20";
F21 = "F21";
F22 = "F22";
F23 = "F23";
F24 = "F24";
F3 = "F3";
F4 = "F4";
F5 = "F5";
F6 = "F6";
F7 = "F7";
F8 = "F8";
F9 = "F9";
FINAL = "Final";
HANGUL = "Hangul";
HANJA = "Hanja";
HELP = "Help";
HOME = "Home";
INSERT = "Insert";
JUNJA = "Junja";
KEY = "Key";
LBUTTON = "Mouse 1";
LCONTROL = "Left Ctrl";
LEFT = "Left";
LMENU = "Left Alt";
LSHIFT = "Left Shift";
LWIN = "Lwin";
MBUTTON = "Mouse 3";
MENU = "Alt";
MODECHANGE = "Mode Change";
MULTIPLY = "Numpad *";
NEXT = "PgDn";
NONAME = "Noname";
NONCONVERT = "Non Convert";
NUMLOCK = "Numlock";
NUMPAD0 = "Numpad 0";
NUMPAD1 = "Numpad 1";
NUMPAD2 = "Numpad 2";
NUMPAD3 = "Numpad 3";
NUMPAD4 = "Numpad 4";
NUMPAD5 = "Numpad 5";
NUMPAD6 = "Numpad 6";
NUMPAD7 = "Numpad 7";
NUMPAD8 = "Numpad 8";
NUMPAD9 = "Numpad 9";
OEM_CLEAR = "OEM Clear";
OR = "or ";
PA1 = "PA1";
PAUSE = "Pause";
PLAY = "Play";
PRINT = "Print Screen";
PRIOR = "PgUp";
RBUTTON = "Mouse 2";
RCONTROL = "Right Ctrl";
RETURN = "Enter";
RIGHT = "Right";
RMENU = "Right Alt";
RSHIFT = "Right Shift";
RWIN = "Rwin";
SCROLL = "Scroll Lock";
SELECT = "Select";
SEPARATOR = "Separator";
SHIFT = "Shift";
SNAPSHOT = "Snapshot";
SPACE = "Space";
SUBTRACT = "Numpad -";
Shift- = "Shift - ";
TAB = "Tab";
UP = "Up";
ZOOM = "Zoom";
\\ = "\\";
\` = "\`";

'[HelpScreenText]'
CAMERA = "Camera";
CHANGE_SCREEN = "PgUp and PgDn to change pages.";
CHEAT = "Cheat";
COMMUNICATIONS = "Communications";
CYCLE_STRING = "* Shift modifies this key to cycle in reverse order";
DEBUG = "Debug";
HELPTITLE = "Help - %s";
MAP = "Map";
MOVEMENT = "Movement";
NOVALOGIC = "NovaLogic";
NULL = "Null";
PAGE = "Page %i of %i";
SERVER = "Server";
SYSTEM = "System";
UNKNOWN = "Unknown Type";
VON = "Voice Over Net";
WEAPONS = "Weapons";

'[HelpScreenActions]'
1stPerson = "1st Person";
showgun = "1st Person Gun View";
3dilist = "3DI List";
3rdPersonl = "3rd Person (drop)";
3rdPersonp = "3rd Person (player)";
3rdPersonw = "3rd Person (world)";
look_dn_abs = "Absolute Look Down";
look_up_abs = "Absolute Look Up";
turn_left_abs = "Absolute Turn Left";
turn_right_abs = "Absolute Turn Right";
Revelations = "Artilary Strikes";
bigguns = "Artiliary Strikes";
AudioMacros = "Audio Macros";
AutoTakedown = "Auto room take down";
weapon7 = "Auxiliary";
alt_move_back = "Back";
move_back = "Back";
Ban = "Ban";
bands = "Bands";
Binoculars = "Binoculars";
talkblue = "Blue Talk";
Bozo = "Bozo";
VonBT = "Break Talker";
breakpoint = "Breakpoint";
briefing = "Briefing";
loadout_menu = "Bring up Armory Menu";
center_view = "Center View";
magazine = "Change Magazine";
talk = "Chat";
comsizes = "Com Sizes";
command = "Command Prompt";
BigMap = "Commander's Map";
crosshairs = "Crosshairs";
Crouch = "Crouch";
tab = "Cycle Observer";
resolution = "Cycle Resolution";
cycle = "Cycle Weapons";
d_down = "Debug Down";
d_end = "Debug End";
debug_hud = "Debug HUD";
d_home = "Debug Home";
d_left = "Debug Left";
d_pgdn = "Debug PgDn";
d_pgup = "Debug PgUp";
d_right = "Debug Right";
d_up = "Debug Up";
VonRVD = "Decrease Record Volume";
scopedec = "Decrease Scope Zero";
weapon8 = "Detonator";
VonDisplay = "Display";
VonDLT = "Display Last Talker";
CameraDown = "Down";
Drop = "Drop Item";
dualcpu = "Dual CPU";
mapelevation = "Elevation Map";
escape = "Escape";
quit = "Exit Game";
exit = "Exit Mission";
attack_1 = "Fire Weapon";
flipmouse = "Flip Mouse";
fly_down = "Fly Down";
fly_up = "Fly Up";
fogcolor = "Fog Color";
foglevel = "Fog Level";
lod = "Force LOD";
alt_move_forward = "Forward";
move_forward = "Forward";
fo = "Foward Observer";
framerate = "Framerate";
ShowFriendly = "Friendly Tags";
SunAndSteel = "Full Ammo";
fullammo = "Full Ammo";
fullScreen = "Fullscreen";
gamma = "Gamma";
Gimme = "Gimme";
MissionGoals = "Goals";
goto = "Goto";
weapon9 = "Grenade";
help = "Help";
hudcolor = "Hud Color";
huddetail = "Hud Detail";
VonRVU = "Increase Record Volume";
scopeinc = "Increase Scope Zero";
DieWithYourBootsOn = "Infinite Ammo";
infammo = "Infinite Ammo";
StillLife = "Invisible";
invisible = "Invisible";
move_jump = "Jump";
killall = "Kill All";
killlist = "Kill List";
weapon1 = "Knife";
weapon0 = "Laser Designator";
LastGame = "Last Game";
CameraLeft = "Left";
LoadGame = "Load a Saved Game";
lockgame = "Lock Game";
look_down = "Look Down";
look_up = "Look Up";
mcolor = "Mcolor";
TheTrooper = "Mega HP's";
megahp = "Mega HP's";
memdump = "Memory Dump";
mousescale = "Mouse Scale";
movegun = "Move Gun";
VonMCT = "Mute Current Talker";
netdelay = "Net Delay";
netdump = "Net Dump";
NextFlag = "Next Flag";
NextWaypoint = "Next Waypoint";
NVG = "Night Vision";
noclip = "No Clip";
attack_2 = "Null";
null = "Null";
stopai = "Pause AI";
Pause = "Pause Game";
pinp = "Pic in Pic";
polycounts = "Poly Count";
polys = "Polys";
weapon3 = "Primary 1";
weapon4 = "Primary 2";
weapon5 = "Primary 3";
Prone = "Prone";
Punt = "Punt";
PuntCRC = "Punt CRC";
PuntLog = "Punt Log";
VonTalk = "Push to Talk";
OldMessages = "Recent Messages";
talkred = "Red Talk";
resetgames = "Reset Game";
restart = "Restart Mission";
CameraRight = "Right";
Detonator = "Satchel Charge Detonator";
saturation = "Saturation";
savescores = "Save Scores";
SaveGame = "Save a Game";
scope = "Scope";
scopemag = "Scope Power";
scopescale = "Scope Scale";
PrintScreen = "Screen Shot";
weapon6 = "Secondary";
VonSLT = "Select Last Talker";
VonSBX = "Select Target";
sendkeypswds = "Send Key Passwords";
server = "Server Screen";
setkey = "Set Key";
setasslot0 = "Set as Slot 0";
setasslot1 = "Set as Slot 1";
setasslot2 = "Set as Slot 2";
setasslot3 = "Set as Slot 3";
setasslot4 = "Set as Slot 4";
setasslot5 = "Set as Slot 5";
setasslot6 = "Set as Slot 6";
setasslot7 = "Set as Slot 7";
setasslot8 = "Set as Slot 8";
setasslot9 = "Set as Slot 9";
settoslot0 = "Set to Slot 0";
settoslot1 = "Set to Slot 1";
settoslot2 = "Set to Slot 2";
settoslot3 = "Set to Slot 3";
settoslot4 = "Set to Slot 4";
settoslot5 = "Set to Slot 5";
settoslot6 = "Set to Slot 6";
settoslot7 = "Set to Slot 7";
settoslot8 = "Set to Slot 8";
settoslot9 = "Set to Slot 9";
weapon2 = "Secondary Weapon";
silencer = "Silencer";
sky = "Sky";
spans = "Spans";
Stand = "Stand";
Slide = "Strafe";
alt_slide_left = "Strafe Left";
slide_left = "Strafe Left";
alt_slide_right = "Strafe Right";
slide_right = "Strafe Right";
detonator = "Switch to Detonator";
explosives = "Switch to Explosives";
grenade = "Switch to Grenades";
knife = "Switch to Knife";
laser = "Switch to Laser Designator";
medic = "Switch to Medic Pack";
primary_weapon = "Switch to Primary Weapon";
second_weapon = "Switch to Secondary Weapon";
sidearm = "Switch to Side Arm";
stalk = "Team Chat";
quicksand = "Terrain Collision Off";
mapterrain = "Terrain Map";
toggle = "Toggle";
CrossHairColor = "Toggle Cross Hair Color";
toggle_item = "Toggle Item";
0tossslot = "Toss Primary Weapon";
tracers = "Tracers";
translate = "Translate";
Turbo = "Turbo";
turn_left = "Turn Left";
turn_right = "Turn Right";
VonUSP = "Unmute Selected Player";
CameraUp = "Up";
usekey = "Use Key";
Verbose = "Verbose";
VCam = "Video Camera";
voxels = "Voxels";
NoRun = "Walk";
water = "Water";
weather = "Weather";
wind = "Wind";
wireframe = "Wireframe";
CameraZoomIn = "Zoom In";
zoomin = "Zoom In";
CameraZoomOut = "Zoom Out";
zoomout = "Zoom Out";
lbsize = "lbsize";

'[Vidtest]'
CANCEL = "Cancel";
CHOOSE_CARD = "Select from the available video cards below.";
DEFAULT_REPORT = "The following video settings have been automatically adjusted to provide the best performance on your current video card:
     Resolution is set to %s
     Textures are set to %s";
FAIL = "FAIL";
GHWINIT_ERR = "An error was encountered while initializing Direct3D";
GHWINIT_ERR_D3DVERSION = "Delta Force - Black Hawk Down requires DirectX 8.1
Please install DirectX 8.1 before running the game.";
HAS_SHADERS = "Your video card supports Hardware Accelerated Vertex and Pixel Shaders.  Delta Force - Black Hawk Down will use these where applicable.

";
HIGH = "High";
HIGHEST = "Highest";
INFORMATION = "Details";
INIT3DHWDEVICELIST = "3D Video Card List Initialization";
LIMIT_REPORT = "Based on the performance capabilities of your video card we have automatically limited the following video settings:
	Resolution is limited to %s
	Textures are limited to %s
";
LOW = "Low";
MAX = "Max";
MEDIUM = "Medium";
MEETS_REQUIREMENTS = "This video card meets all requirements to play!";
NORMAL = "Normal";
NOTHING_SUITABLE = "We were unable to find a suitable card to run the game.  Please make sure that you have the latest drivers for your video card and run the Video Test again.

";
NO_3DCARDS = "The Video Test did not detect a 3D video card.  This game requires a Direct3D accelerated video card.

If you have a 3D video card installed in your computer, please contact your video card manufacturer for updated drivers.


Click OK to exit the game.";
NO_DIRECTX8 = "The drivers for this video card do not fully support DirectX8.  If you experience any problems, please contact your video card manufacturer for updated drivers.

";
NO_MULTITEXTURES = "This video card does not support multitexturing.  You may experience problems when viewing certain objects.

";
NO_TNL = "This video card does not support HW T&L (Hardware accelerated Transform & Lighting).  Delta Force - Black Hawk Down has been optimized for cards supporting HW T&L, and therefore will run slower on your hardware.

";
NO_WHQL = "The drivers for this video card may not be WHQL (Windows Hardware Quality Labs) certified.  If you experience any problems, please contact your video card manufacturer for updated drivers.

";
OFF = "Off";
OK = "OK";
PASS = "PASS";
PREPARE_FOR_RESTEST = "Your screen will flicker and go black during the test.  If you don't see a 'Test Completed' message 30 seconds after clicking "OK", restart your computer and try the video test again.  

If you continue to have problems, contact NovaLogic Technical Support for assistance.";
RECOMMENDATION = "We recommend using the %s video card.";
RECOMMENDED = "(Recommended)";
RESOLUTION_TEST = "Resolution Test";
RESOLUTION_TEST_COMPLETE = "Resolution Test Complete";
RESOLUTION_TEST_FAILED = "The resolution test has failed.  Please make sure that you have the latest drivers for your video card and run the Video Test again.

If you continue to have problems, contact NovaLogic Technical Support for assistance.";
RESOLUTION_TEST_PASSED = "Resolution test completed successfully!

Results:
	640x480    - %s				DirectX8 video drivers - %s
	800x600    - %s				Hardware T&L - %s
	1024x768  - %s				Multitexturing - %s
	1280x1024- %s				Shaders - %s

The following video settings have been automatically adjusted to provide the best performance on your current video card:
	Resolution is set to %s
	Terrain Detail is set to %s
	Object Detail is set to %s	
	Texture Quality is set to %s
	Water Quality is set to %s
	Shadow Quality is set to %s
	Particle Density is set to %s

Based on the performance capabilities of your video card we have automatically limited the following video settings:
	Resolution is limited to %s
	Terrain Detail is limited to %s
	Object Detail is limited to %s	
	Texture Quality is limited to %s
	Water Quality is limited to %s
	Shadow Quality is limited to %s
	Particle Density is limited to %s

Click OK to play.";
RUNNING_WIN2K = "You are running Delta Force - Black Hawk Down under Windows2000, which may reduce your overall performance.

";
SELECT_DEVICE = "Select Video Card";
UNKNOWN = "Unknown";
VIDEO_CARD_LIST = "3D Video Cards";
oo = "Click OK to exit the game.";

'[Overlays]'
MS = "ms";
STROVER1 = "Congratulations!  Mission Completed Successfully.";
STROVER10 = "Carrying: Laptop";
STROVER11 = "Carrying: Code Book";
STROVER12 = "Carrying: Case";
STROVER13 = "Carrying: Metal Case";
STROVER14 = "Carrying: Bomb!";
STROVER15 = "Carrying: Red Flag";
STROVER16 = "Carrying: Blue Flag";
STROVER17 = "Carrying: Unknown";
STROVER18 = "None";
STROVER19 = "Flag Red";
STROVER2 = "Game Over.  Mission Incomplete.";
STROVER20 = "Flag Blue";
STROVER21 = "Flag Bay Blue";
STROVER22 = "Flag Bay Red";
STROVER23 = "Alpha";
STROVER24 = "Red Base";
STROVER25 = "Blue Base";
STROVER26 = "Team Blue";
STROVER27 = "Team Red";
STROVER28 = "Co-Op Team Blue";
STROVER29 = "Deathmatch";
STROVER3 = "Hit ENTER to end mission.";
STROVER30 = "King of the Hill";
STROVER31 = "Capture the Flag";
STROVER32 = "Blue Team Wins!";
STROVER33 = "Red Team Wins!";
STROVER34 = "Draw - No Winner";
STROVER35 = "End Game Stats";
STROVER36 = "Player";
STROVER37 = "Flags";
STROVER38 = "Time";
STROVER39 = "Score";
STROVER4 = "Hit R to replay mission";
STROVER40 = "Kills";
STROVER41 = "Deaths";
STROVER42 = "Next game will begin momentarily...";
STROVER43 = "Messages";
STROVER44 = "Cooperative";
STROVER45 = "DM";
STROVER46 = "TDM";
STROVER47 = "KOTH";
STROVER48 = "TKOTH";
STROVER49 = "CTF";
STROVER5 = "End Mission? (Y/N/R)";
STROVER50 = "Timer";
STROVER53 = "In the Zone:";
STROVER54 = "Connection Interrupted";
STROVER55 = "WP";
STROVER56 = "Search & Destroy";
STROVER57 = "Attack & Defend";
STROVER58 = "Flag Ball";
STROVER59 = "Game Starts In:";
STROVER6 = "WE LOST THE SERVER!";
STROVER60 = "Flag Green";
STROVER61 = "Yellow Team Wins!";
STROVER62 = "Violet Team Wins!";
STROVER63 = "Please Wait";
STROVER64 = "Team Deathmatch";
STROVER65 = "Saves";
STROVER66 = "Armory";
STROVER67 = "Flag Bay Yellow";
STROVER68 = "Flag Bay Violet";
STROVER69 = "Yellow Base";
STROVER7 = "Game Paused";
STROVER70 = "Violet Base";
STROVER71 = "Target Blue";
STROVER72 = "Target Red";
STROVER73 = "Wind:";
STROVER74 = "None";
STROVER75 = "kph";
STROVER76 = "N";
STROVER77 = "S";
STROVER78 = "E";
STROVER79 = "W";
STROVER80 = "NE";
STROVER81 = "NW";
STROVER82 = "SE";
STROVER83 = "SW";
STROVER86 = "Range:";
STROVER87 = "Elevation:";
STROVER89 = "No Waypoint";
STROVER90 = "No Target";
STROVER91 = "Breath";
STROVER_ARMORY_INFO = "Press '%s' to access armory menu";
STROVER_ARMORY_NOKEY = "You cannot access the armory.  Remap the Armory function to a key in the Options Menu.";
STROVER_BLUETEAM = "Blue Team";
STROVER_CALLMEDIC = "Hit '%s' to call for medic.";
STROVER_CALLMEDIC_NOKEY = "You cannot call for a medic.  Remap the Medic function to a key in the Options Menu.";
STROVER_CROUCHED = "Crouched";
STROVER_DIST = "Distance: %ldm";
STROVER_DIST1KM = "Distance: 1km+";
STROVER_EMOTES = "Emotes";
STROVER_ENDGAME = "End Game";
STROVER_ENDGAMECOND_BLUEFLAGS = "When %ld Blue Team flags have been captured";
STROVER_ENDGAMECOND_BLUETGTS = "When %ld Blue Team targets have been destroyed";
STROVER_ENDGAMECOND_ENEMYKILLS = "When Enemy Kills reach %ld";
STROVER_ENDGAMECOND_FLAGS = "When %ld flags have been captured";
STROVER_ENDGAMECOND_REDFLAGS = "When %ld Red Team flags have been captured";
STROVER_ENDGAMECOND_REDTGTS = "When %ld Red Team targets have been destroyed";
STROVER_ENDGAMECOND_TIMELIMIT = "When game time reaches %ld minutes";
STROVER_ENDGAMECOND_TITLEEND = "End Game conditions:";
STROVER_ENDGAMECOND_TITLEWIN = "Win conditions:";
STROVER_ENDGAMECOND_XP = "When Experience Points reach %ld";
STROVER_ENDGAMECOND_ZONETIME = "When zone time has reached %ld minutes";
STROVER_FLAGCARRIER = "Flag Carrier: ";
STROVER_GAMESUMMARY = "Game Summary";
STROVER_GAMETYPE = "Game Type:";
STROVER_KILLLIST = "Kill List";
STROVER_LOAD = "F12 to load a saved game";
STROVER_LOADGAME = "Game loaded";
STROVER_LOADGAMEFAIL = "Unable to load game";
STROVER_LOSECONDP = "Lose Conditions";
STROVER_LOSECONDS = "Secondary Lose Conditions";
STROVER_MAXPLAYERSALLOWED = "Maximum Players Allowed:";
STROVER_MEDICTIMER = "Medic timer expires in:";
STROVER_MISSIONNAME = "Mission Name:";
STROVER_MISSIONOBJECTIVES = "Mission Objectives";
STROVER_MISSIONOVER = "Mission Over";
STROVER_NUMPLAYERS = "Number of Players:";
STROVER_PENALTYTIMER = "Respawn allowed in:";
STROVER_PRONE = "Prone";
STROVER_PSPRESPAWN = "PSP Respawn in:";
STROVER_PSP_LIST = "Spawn Points";
STROVER_PSP_TAKING = "Taking over spawn point...";
STROVER_QUITCLIENT = "Quit Game? (Y/N)";
STROVER_QUITSERVER = "Quit Server? (Y/N)";
STROVER_RANGE = "Range: %ldm";
STROVER_RANGE1KM = "Range: 1km+";
STROVER_REDTEAM = "Red Team";
STROVER_RESPAWN = "Hit SPACE to respawn";
STROVER_RESPAWNBLUE = "Or select a <c4040FF>BLUE<co> spawnpoint";
STROVER_RESPAWNRED = "Or select a <cFF4040>RED<co> spawnpoint";
STROVER_REVIVED = "You are revived.";
STROVER_RULEPENALTIES = "Penalties will be applied for the following actions:";
STROVER_RULEPOINTS = "Points will be awarded for the following actions:";
STROVER_RULES = "Rules:";
STROVER_RULES_AD = "The attacking team must destroy all the targets in the defender's base, before the defending team accrues enough points to win.   Attackers earn points from destroying enemy targets, as well as eliminating opponents.   Defenders earn points from eliminating attacking opponents, with bonuses when they are in your <i>Defense Zone<-i>.   Bonuses may also be awarded for headshots, knife kills, double kills, and sniper kills.   Medics will earn points for medic saves, and injured teammates will earn points if they wait for the medic to revive them.   Points are deducted for deaths, and for killing yourself or your teammates (if friendly kills are permitted by host).";
STROVER_RULES_CTF = "As part of the Red or Blue team, your objective is to grab the other team's flags by running over them and returning them to your team's flag bay.   At the same time, you need to defend your own flags from your opponents.   If you kill an opponent with a flag, you may save the flag (return it to it's initial position) by simply touching it.   Flags are represented on the GPS as a colored flag symbol, and flag bays are represented by a colored circle.   The waypoint indicator will help guide you to the flags and back to your flag bay.
Points are awarded for each enemy flag captured, and each friendly flag saved.   Points are also awarded for eliminating opponents, with bonuses if they are carrying a flag.   Bonuses may also be awarded for headshots, knife kills, double kills, and sniper kills.   Medics will earn points for medic saves, and injured teammates will earn points if they wait for the medic to revive them.   Points are deducted for deaths, and for killing yourself or your teammates (if friendly kills are permitted by host).";
STROVER_RULES_DM = "All players are competing against each other to gain the high score.   Points are awarded for eliminating opponents.   Bonuses may be awarded for headshots, knife kills, double kills, and sniper kills.   Points are deducted for deaths, and for killing yourself.";
STROVER_RULES_FB = "There is one flag in the middle of the playing field.   The teams compete to grab the flag and return to their base with it to score points.   Once the flag is returned it's position is reset to the center of the playing field.   Points are awarded each time the flag is successfully returned to your base.   Points are also awarded for eliminating opponents, with bonuses if they are in proximity to the flag, and maximum points if they are carrying the flag.   Bonuses may also be awarded for headshots, knife kills, double kills, and sniper kills.   Medics will earn points for medic saves, and injured teammates will earn points if they wait for the medic to revive them.   Points are deducted for deaths, and for killing yourself or your teammates (if friendly kills are permitted by host).";
STROVER_RULES_KOTH = "Players win by occupying a certain area for a specific duration of time.   The <i>Hot Zone<-i> shows up as an orange circle on your GPS.   Points will be awarded as your "in-zone" time increases.   Points are also awarded for eliminating opponents, with bonuses if you or they are in the <i>Hot Zone<-i>.   Bonuses may also be awarded for headshots, knife kills, double kills, and sniper kills.";
STROVER_RULES_PSPGAMES = "Points are also awarded for successfully taking over Progressive Spawn Points (<i>PSPs<-i>).   <i>PSPs<-i> are beacons placed in the map that can be controlled by either Red or Blue teams.   When a team controls a <i>PSP<-i>, players have the choice of respawning at the <i>PSP<-i>, or back at a default spawn point by their base.    To capture a <i>PSP<-i>, touch it and it will turn green.   After 15 seconds it will switch to your team's color, and you will be able to respawn there.   When your character is waiting to respawn, you will see a map of the area and the <i>PSPs<-i> highlighted in the color of the team that controls it.   Press the corresponding letter to spawn at that <i>PSP<-i>, or SPACE BAR to spawn at a default spawn point by your base.";
STROVER_RULES_SD = "Each team must enter into each other's <i>Defense Zone<-i> and destroy specific targets to win the game.   You may stay behind and earn points defending your base, or venture out to deploy satchel charges at the enemy's base.   Points are awarded for each target destroyed.   Points are also awarded for eliminating opponents, with bonuses if they are within your <i>Defense Zone<-i>.   Bonuses may also be awarded for headshots, knife kills, double kills, and sniper kills.   Medics will earn points for medic saves, and injured teammates will earn points if they wait for the medic to revive them.   Points are deducted for deaths, and for killing yourself or your teammates (if friendly kills are permitted by host).";
STROVER_RULES_TDM = "Red and blue teams compete against each other to gain the high score.   Points are awarded for eliminating opponents.   Bonuses may be awarded for headshots, knife kills, double kills, and sniper kills.   Medics will earn points for medic saves, and injured teammates will earn points if they wait for the medic to revive them.   Points are deducted for deaths, and for killing yourself or your teammates (if friendly kills are permitted by host).";
STROVER_RULES_TKOTH = "Teams win by accruing the most points for being in the zone.   The <i>Hot Zone<-i> shows up as an orange circle on your GPS.   Points will be awarded as individual team members' "in-zone" time increases.   Points are also awarded for eliminating opponents, with bonuses if you or they are in the <i>Hot Zone<-i>.   Bonuses may also be awarded for headshots, knife kills, double kills, and sniper kills.   Medics will earn points for medic saves, and injured teammates will earn points if they wait for the medic to revive them.   Points are deducted for deaths, and for killing yourself or your teammates (if friendly kills are permitted by host).";
STROVER_SAVEGAME = "The game has been saved.  (Saves left: %d)";
STROVER_SAVEGAMEFAIL = "Unable to save game";
STROVER_SAVEGAME_FNF = "Save game data file could not be found or opened";
STROVER_SERVERNAME = "Server Name:";
STROVER_SLOT = "Saved Game";
STROVER_SLOTEMPTY = "%d - Not Used";
STROVER_SLOTINFO = "%d - %s  [%02dh:%02dm:%02ds]";
STROVER_SLOTTITLE_LOAD = "Load Slot";
STROVER_SLOTTITLE_SAVE = "Save Slot (1-9)";
STROVER_STANDING = "Standing";
STROVER_STATFIELD01 = "Suicides";
STROVER_STATFIELD02 = "Friendly
Kills";
STROVER_STATFIELD03 = "Enemy
Kills";
STROVER_STATFIELD04 = "Deaths";
STROVER_STATFIELD05 = "Zone
Time";
STROVER_STATFIELD06 = "Flags
Captured";
STROVER_STATFIELD07 = "Flags
Saved";
STROVER_STATFIELD08 = "Targets
Destroyed";
STROVER_STATFIELD09 = "Shots
Fired";
STROVER_STATFIELD10 = "Medic
Saves";
STROVER_STATFIELD11 = "Revives";
STROVER_STATFIELD12 = "PSP
Attempts";
STROVER_STATFIELD13 = "PSP
Takeovers";
STROVER_STATFIELD14 = "Flagcarrier
Kill";
STROVER_STATFIELD15 = "Double
Kills";
STROVER_STATFIELD16 = "Headshot
Kills";
STROVER_STATFIELD17 = "Knife
Kills";
STROVER_STATFIELD18 = "Zone Attack
Kill Bonus";
STROVER_STATFIELD19 = "Experience
Points";
STROVER_STATFIELD20 = "Item
Points";
STROVER_STATFIELD21 = "Shots
Per Kill";
STROVER_STATFIELD22 = "Zone Defend
Kill Bonus";
STROVER_STATFIELD23 = "Friendly Zone
Defending Bonus";
STROVER_STATFIELD24 = "Friendly Zone
Policing Bonus";
STROVER_STATFIELD25 = "Enemy Zone
Attacking Bonus";
STROVER_STATFIELD26 = "Enemy Zone
Securing Bonus";
STROVER_STATFIELD27 = "Sniper
Kill Bonus";
STROVER_STATFIELD28 = "Flag Zone
Defend Bonus A";
STROVER_STATFIELD29 = "Flag Zone
Defend Bonus B";
STROVER_STATFIELDSMALL01 = "Suic";
STROVER_STATFIELDSMALL02 = "Frnd
Kill";
STROVER_STATFIELDSMALL03 = "Enmy
Kills";
STROVER_STATFIELDSMALL04 = "Death";
STROVER_STATFIELDSMALL05 = "Zone
Time";
STROVER_STATFIELDSMALL06 = "Flgs
Captd";
STROVER_STATFIELDSMALL07 = "Flgs
Svd";
STROVER_STATFIELDSMALL08 = "Tgts
Dstrd";
STROVER_STATFIELDSMALL09 = "Shots
Fired";
STROVER_STATFIELDSMALL10 = "Med
Save";
STROVER_STATFIELDSMALL11 = "Revd";
STROVER_STATFIELDSMALL12 = "PSP
Att";
STROVER_STATFIELDSMALL13 = "PSP
Taken";
STROVER_STATFIELDSMALL14 = "Flg Car
Kills";
STROVER_STATFIELDSMALL15 = "Dbl
Kills";
STROVER_STATFIELDSMALL16 = "Head
Kills";
STROVER_STATFIELDSMALL17 = "Knife
Kills";
STROVER_STATFIELDSMALL18 = "Zone
A-Kills";
STROVER_STATFIELDSMALL19 = "Exp
Pts";
STROVER_STATFIELDSMALL20 = "Item
Pts";
STROVER_STATFIELDSMALL21 = "Shots
/Kill";
STROVER_STATFIELDSMALL22 = "Zone
D-Kills";
STROVER_STATFIELDSMALL23 = "FZone
D-Kills";
STROVER_STATFIELDSMALL24 = "FZone
P-Kills";
STROVER_STATFIELDSMALL25 = "EZone
A-Kills";
STROVER_STATFIELDSMALL26 = "EZone
S-Kills";
STROVER_STATFIELDSMALL27 = "Sniper
Kills";
STROVER_STATFIELDSMALL28 = "Flag
Defend A";
STROVER_STATFIELDSMALL29 = "Flag
Defend B";
STROVER_STATVAR00 = "Captured Flag";
STROVER_STATVAR01 = "Saved Flag";
STROVER_STATVAR02 = "Destroyed Target";
STROVER_STATVAR03 = "Death";
STROVER_STATVAR04 = "Suicide";
STROVER_STATVAR05 = "Fratricide";
STROVER_STATVAR06 = "Enemy Kill";
STROVER_STATVAR07 = "In The Zone Bonus";
STROVER_STATVAR08 = "Time In The Zone";
STROVER_STATVAR09 = "Shot Fired";
STROVER_STATVAR10 = "Medic Save";
STROVER_STATVAR11 = "Revive";
STROVER_STATVAR12 = "PSP Attempt";
STROVER_STATVAR13 = "PSP Takeover";
STROVER_STATVAR14 = "Flagcarrier Kill Bonus";
STROVER_STATVAR15 = "Double Kill Bonus";
STROVER_STATVAR16 = "Headshot Kill Bonus";
STROVER_STATVAR17 = "Knife Kill Bonus";
STROVER_STATVAR18 = "Zone Attack Kill Bonus";
STROVER_STATVAR19 = "Zone Defend Kill Bonus";
STROVER_STATVAR20 = "Friendly Zone Defending Bonus";
STROVER_STATVAR21 = "Friendly Zone Policing Bonus";
STROVER_STATVAR22 = "Enemy Zone Attacking Bonus";
STROVER_STATVAR23 = "Enemy Zone Securing Bonus";
STROVER_STATVAR24 = "Sniper Skill Kill Bonus (min)";
STROVER_STATVAR25 = "Sniper Skill Kill Bonus (max)";
STROVER_STATVAR26 = "Sniper Skill Kill Distance (min)";
STROVER_STATVAR27 = "Sniper Skill Kill Distance (max)";
STROVER_STATVAR28 = "Sniper Enemy Kill Bonus";
STROVER_STATVAREXP00 = "Player successfully brings a flag back to the team flagbay.";
STROVER_STATVAREXP01 = "Player safely returns a flag stolen by the other team.   Enemy flag-carrier must be eliminated in order to save the flag.";
STROVER_STATVAREXP02 = "Player successfully destroys a target at the enemy base.   This requires the use of a satchel charge.";
STROVER_STATVAREXP03 = "Player is eliminated by opponent.";
STROVER_STATVAREXP04 = "Player kills himself.";
STROVER_STATVAREXP05 = "Player kills a member of his own team (if friendly kills are permitted by host).";
STROVER_STATVAREXP06 = "Player eliminates an opponent.";
STROVER_STATVAREXP07 = "Player recieves this bonus while they are alive within the area marked on the GPS, at intervals specified by "in the zone" time.";
STROVER_STATVAREXP08 = "Amount of time (in seconds) that must transpire before you receive your "in the zone" bonus.";
STROVER_STATVAREXP09 = "Counted for each shot fired by the player using any weapon.";
STROVER_STATVAREXP10 = "Medic uses a medpack to successfully revive a teammate.";
STROVER_STATVAREXP11 = "Injured player waits to be revived by a Medic.";
STROVER_STATVAREXP12 = "Player attempts to take over a PSP that is neutral or belongs to the other team.";
STROVER_STATVAREXP13 = "Player successfully takes over a PSP without the other team touching it.";
STROVER_STATVAREXP14 = "Player kills an opponent that was carrying the flag.";
STROVER_STATVAREXP15 = "Player kills more than one opponent with the same round.";
STROVER_STATVAREXP16 = "Player kills an opponent with a shot to the head.";
STROVER_STATVAREXP17 = "Player kills opponent using a knife.";
STROVER_STATVAREXP18 = "Player kills an opponent that is in the <i>Hot Zone<-i>.";
STROVER_STATVAREXP19 = "Player is in the <i>Hot Zone<-i> when killling an opponent.";
STROVER_STATVAREXP20 = "Player kills an opponent that has entered the <i>Friendly Zone<-i>.";
STROVER_STATVAREXP21 = "Player is in the <i>Friendly Zone<-i> when killing an opponent.";
STROVER_STATVAREXP22 = "Player kiils an opponent that is in the <i>Enemy Zone<-i>.";
STROVER_STATVAREXP23 = "Player is in the <i>Enemy Zone<-i> when killing an opponent.";
STROVER_STATVAREXP24 = "Player kills an opponent using a sniper weapon (bonus at minimum distance).";
STROVER_STATVAREXP25 = "Player kills an opponent using a sniper weapon (bonus at maximum distance).";
STROVER_STATVAREXP26 = "Player kills an opponent using a sniper weapon (minimum distance in meters)";
STROVER_STATVAREXP27 = "Player kills an opponent using a sniper weapon (maximum distance in meters)";
STROVER_STATVAREXP28 = "Player kills an enemy who is a sniper.";
STROVER_TAKINGOVERBLD = "Taking over building";
STROVER_TAKINGOVERBLDPSP = "Taking over building PSP";
STROVER_TAKINGOVEROBJ = "Taking over object";
STROVER_TAKINGOVERPSP = "Taking over spawn point";
STROVER_TAKINGOVERVEH = "Taking over vehicle";
STROVER_TAKINGOVERVEHPSP = "Taking over vehicle PSP";
STROVER_UPTIME = "Uptime:";
STROVER_VIOLETTEAM = "Violet Team";
STROVER_WINCONDP = "Goals";
STROVER_WINCONDS = "Secondary Objectives";
STROVER_WNDTITLE_DIRECTIVES = "Directives";
STROVER_WNDTITLE_LOADOUT = "Loadout";
STROVER_YELLOWTEAM = "Yellow Team";
STROVR_CQB = "CQB";
STROVR_DEMO = "Demolition";
STROVR_GUNNER = "Gunner";
STROVR_LOAD_PREVIOUS = "Load from a previously saved game (1-%d)";
STROVR_MEDIC = "Medic";
STROVR_NO_FILE = "Could not create the save game file.";
STROVR_NO_MIS = "The CRC signature could not be created for this mission. ";
STROVR_NO_SAVES_LEFT = "You have used up all of the available save games.";
STROVR_NO_WRITE = "An error occured during save game file write.";
STROVR_SNIPER = "Sniper";
STROVR_UNKNOWN = "Unknown";
TOPBLUE = "Top Players (Blue Team)";
TOPNEUTRAL = "Top Players (Neutral Team)";
TOPPLAYERS = "Top Players";
TOPPLAYERS1TO25 = "Top Players (1-25)";
TOPPLAYERS26TO50 = "Top Players (26-50)";
TOPPLAYERSPERTEAM = "Top Players (on each Team)";
TOPPLAYERS_XXXTOXXX = "Top Players (%ld - %ld)";
TOPRED = "Top Players (Red Team)";
TOPVIOLET = "Top Players (Violet Team)";
TOPYELLOW = "Top Players (Yellow Team)";
XXTOPPLAYERS = "%s Top Players";
attach_50cal = ".50 Cal";
attach_emcannon = "EMCannon";
attach_minigun = "Minigun";
attach_mk19 = "Grenade Launcher";
attach_mortor = "Morter";
METERS = "meters";

'[Farp]'
fp_Opt1 = "Reload Current";
fp_Opt2 = "Hydras";
fp_Opt3 = "Stingers";
fp_Opt4 = "Hellfire";
fp_Opt5 = "Efams";
fp_Opt6 = "Load Preset Light";
fp_Opt7 = "Load Preset Heavy";
fp_accept = "OK";
Fp_instruct = "Use Arrow Keys to Navigate selections";

'[item]'
text_737 = "737 Airplane";
text_747 = "747 Airplane";
text_Shaldag = "Patrol Boat";
text_a10 = "A-10 Thunderbolt";
text_airplane = "Airplane";
text_apache = "AH-64 Apache";
text_avenger = "Avenger";
text_blackhawk = "UH-60 Blackhawk";
text_bmp = "BMP-2";
text_brdm = "BRDM-2";
text_building = "Building";
text_c130 = "C-130 Airplane";
text_carrier = "Assault Carrier";
text_cessna = "Cessna Airplane";
text_chinook = "H-47 Chinook";
text_comanche = "Comanche";
text_default = "Can't Identify";
text_f16 = "F-16 Airplane";
text_havoc = "Mi-28 Havoc";
text_helix = "Ka-27 Helix";
text_hind = "Mi-24 Hind";
text_hokum = "Ka-50 Hokum";
text_infantry = "Infantry";
text_lcac = "LCAC";
text_limo = "Limousine";
text_m1a2 = "M1A2 Abrams";
text_m3 = "M3 Bradley";
text_mig29 = "Mig-29 Airplane";
text_nanuchka = "Frigate";
text_sa6 = "SA-6 Gainful";
text_sa8 = "SA-8 Gecko";
text_scud = "SCUD";
text_seahawk = "CH-60 Seahawk";
text_sovremeny = "Destroyer";
text_speedboat = "Speedboat";
text_su25 = "Su-25 Frogfoot";
text_sub = "Submarine";
text_t72 = "T-72";
text_t80 = "T-80";
text_tunguska = "2S6M Tunguska";
text_vulcan = "Air Defense Gun";
text_yacht = "Yacht";
text_zodiac = "Raft";

'[Epilog]'
STREPILOG_ENEMYUNITS = "Enemy Targets Destroyed";
STREPILOG_FAST_PLAY_BONUS = "Mission Efficiency";
STREPILOG_FRIENDLYUNITS = "Non-Combatants Lost";
STREPILOG_KEYINFO = "Press ENTER to continue, or R to restart mission.";
STREPILOG_KEYINFO2 = "Press a number to load a previously saved game.";
STREPILOG_OBJECTIVEBONUS = "Objectives";
STREPILOG_SAVEGAME_BONUS = "Unused Save Games";
STREPILOG_TEAMUNITS = "Friendlies Lost";
STREPILOG_TOTALPOINTS = "Total Points Scored";

'[Canned Msg]'
STRCND01 = "$A ended it all.";
STRCND02 = "$A got tired of life.";
STRCND03 = "$A decided it was all too much.";
STRCND04 = "$A gave $B a lethal ending.";
STRCND05 = "$A sent $B to the morgue.";
STRCND06 = "$A ended $B's misery.";
STRCND07 = "$A murdered $B.";
STRCND08 = "$A killed $B with a shot to the head.";
STRCND09 = "$B fell on $A's blade.";
STRCND10 = "$A slit $B open.";
STRCND11 = "$A spilled $B's guts.";
STRCND12 = "$A was killed.";
STRCND13 = "Red has won a flag ($A).";
STRCND14 = "Blue has won a flag ($A).";
STRCND15 = "$A has picked up a blue flag.";
STRCND16 = "$A has picked up a red flag.";
STRCND17 = "$A saved a red flag.";
STRCND18 = "$A saved a blue flag.";
STRCND19 = "$A is dead.";
STRCND20 = "Unknown death message.";
STRCND21 = "$A crashed.";
STRCND22 = "$A killed flag carrier $B.";
STRCND23 = "$A should have known better.";
STRCND24 = "$A crashed.";
STRCND25 = "Yellow has won a flag ($A).";
STRCND26 = "Violet has won a flag ($A).";
STRCND27 = "$A picked up a green flag.";
STRCND28 = "$A died.";
STRCND29 = "$A sunk to the bottom of the sea.";
STRCND30 = "$A killed $B.";
STRCND31 = "Waypoint Filter On: $A";
STRCND32 = "Waypoint Filter Off: $A";
STRCND33 = "Text Filter On: $A";
STRCND34 = "Text Filter Off: $A";
STRCND35 = "Unable to filter the server";
STRCND36 = "$A terminated $B with a double kill!";
STRCND37 = "$A killed $B with a the same bullet!";
STRCND38 = "$A ended $B's life with a single bullet.";
STRCND39 = "A blue flag has returned to its initial position.";
STRCND40 = "A red flag has returned to its initial position.";
STRCND41 = "A green flag has returned to its initial position.";
STRCND42 = "$B has revived $A.";
STRCND43 = "$A lost a kill.";
STRCND44 = "The weapon  is not valid for this game.";
STRCND45 = "$A has received some medical attention from $B.";
STRCND_PSP_BLUETAKEN = "$A of Blue Team has taken over a PSP!";
STRCND_PSP_BLUEWARNING = "$A of Blue Team is attempting to take a PSP";
STRCND_PSP_REDTAKEN = "$A of Red Team has taken over a PSP!";
STRCND_PSP_REDWARNING = "$A of Red Team is attempting to take a PSP";
STRCND_SSKB1 = "$A recieved a sniper kill bonus of $B point!";
STRCND_SSKBX = "$A recieved a sniper kill bonus of $B points!";
STRCND_YRSSKB1 = "You received a sniper kill bonus of $A point!";
STRCND_YRSSKBX = "You recieved a sniper kill bonus of $A points!";
STRCND48 = "$A walked into some spinning blades.";

'[KeyPress]'
STRKEYPRESS_ADVANCED = "A";
STRKEYPRESS_NO = "N";
STRKEYPRESS_RESTART = "R";
STRKEYPRESS_SAVE = "S";
STRKEYPRESS_YES = "Y";

'[WepDes]'
WPN_colt45 = "Colt .45";
WPN_W300 = "MCRT .300 Tactical";
WPN_UG50cal = ".50 Cal";
WPN_SATCHEL_DETONATOR = "Detonator";
WPN_SATCHEL_CHARGE = "Satchel Charge";
WPN_RemmingtonSG = "Remington Shotgun";
WPN_PSG1 = "PSG-1";
WPN_MP5 = "MP5";
WPN_MEDPACK = "Med Pack";
WPN_MAG58 = "M240";
WPN_M9Beretta = "M9 Beretta";
WPN_M60 = "M60";
WPN_M249SAW = "M249 Saw";
WPN_M24 = "M24";
WPN_M21 = "M21";
WPN_M16M203HE = "M16/203 - Grenade";
WPN_M16M203BURST = "M16/203 - Burst";
WPN_M16M203 = "M16/203 - Semi";
WPN_M16BURST = "M16 - Burst";
WPN_M16 = "M16 - Semi";
WPN_KNIFE = "Knife";
WPN_HYDRA70 = "Weapon Access Error";
WPN_GRENADESM = "Smoke Grenade";
WPN_GRENADEHE = "Frag Grenade";
WPN_GRENADEFB = "Flash Bang";
WPN_GRENADECS = "Tear Gas";
WPN_G36AUTO = "G36 - Auto";
WPN_G3AUTO = "G3 - Auto";
WPN_EMcannon = "E M Cannon";
WPN_EMPLMORTOR = "Weapon Access Error";
WPN_EMPLCDMINI = "Minigun";
WPN_EMPLCDGRND = "Grenade Launcher";
WPN_EMPLCD50NA = ".50 Cal";
WPN_EMPLCD50 = ".50 Cal";
WPN_EMP50TRI = ".50 Cal";
WPN_EMP50ETEK = ".50 Cal";
WPN_CLAYMORE = "Claymore";
WPN_CAR15M203HE = "CAR15/203 - Grenade";
WPN_CAR15M203AUTO = "CAR15/203 - Auto";
WPN_CAR15M203 = "CAR15/203 - Semi";
WPN_CAR15AUTO = "CAR15 - Auto";
WPN_CAR15 = "CAR15 - Semi";
WPN_Barret = "Barrett .50 Cal";
WPN_AT4 = "AT4";
WPN_30MM = "Weapon Access Error";
WPN_20MM = "Weapon Access Error";
WEAP_SHORT_SHOTGUN = "Shotgun";
WEAP_SHORT_SAW = "SAW";
WEAP_SHORT_SATCHEL = "Satchel Charge";
WEAP_SHORT_PSG1 = "PSG-1";
WEAP_SHORT_MP5 = "MP5";
WEAP_SHORT_M9BERETTA = "M9 Beretta";
WEAP_SHORT_M60 = "M60";
WEAP_SHORT_M24 = "M24";
WEAP_SHORT_M21 = "M21";
WEAP_SHORT_M16M203 = "M16/203";
WEAP_SHORT_M16 = "M16";
WEAP_SHORT_GRENADE_SMOKE = "Smoke Grenade";
WEAP_SHORT_GRENADE_FRAG = "Frag Grenade";
WEAP_SHORT_GRENADE_FLASH = "Flash Bang";
WEAP_SHORT_GRENADE_CS = "Tear Gas";
WEAP_SHORT_G36 = "G36";
WEAP_SHORT_G3 = "G3";
WEAP_SHORT_FNMAG = "M240";
WEAP_SHORT_COLT45 = "Colt .45";
WEAP_SHORT_CLAYMORE = "Claymore";
WEAP_SHORT_CAR15M203 = "CAR15/203";
WEAP_SHORT_CAR15 = "CAR15";
WEAP_SHORT_BARRET = "Barrett";
WEAP_SHORT_AT4 = "AT4";
WEAP_SHORT_300MAG = "MCRT .300 Tactical";
WPN_G3 = "G3 - Semi";
WPN_G36 = "G36 - Semi";

'[Score]'
SCORE_MIS_ENEMY_AIR = "Enemy Air Targets available: %d";
SCORE_MIS_ENEMY_AVAIL = "Total Enemy Targets available: %d";
SCORE_MIS_ENEMY_GROUND = "Enemy Ground Targets available: %d";
SCORE_MIS_ENEMY_INF = "Enemy Infantry Targets available: %d";
SCORE_MIS_FRIENDLY = "Friendly Targets eliminated: %d";
SCORE_MIS_OBJ = "Mission Objectives available: %d";
SCORE_MIS_TARGETS_AVAIL = "Mission Targets available: %d";
SCORE_MIS_TEAMMATES = "Teammates lost: %d";
SCORE_MIS_TEAM_N = "Score penalty for lost teammates: %d";
SCORE_OBJ = "Score for Objectives: %d";
SCORE_OBJECTIVES = "Objectives Completed: %d";
SCORE_SAVES_LEFT = "Save games left: %d";
SCORE_TARGETS = "Score for Targets Eliminated: %d";
SCORE_TARGETS_ELIMINATED = "Targets Eliminated: %d";
SCORE_TARGETS_N = "Score penalty for lost friendlies: %d";
SCORE_TITLE = "Statistics";
SCORE_TOTAL = "Total Points Awarded: %d";

'[Emotes]'
EMO1 = "Salute";
EMO2 = "Go Forward";
EMO3 = "Take cover";
EMO4 = "Let's go";
EMO5 = "Come This way";
EMO6 = "Celebration 1";
EMO7 = "Celebration 2";
EMO8 = "Play Dead";
EMO9 = "Flex";

'[LoadingText]'
LTGT_AD = "Attack And Defend";
LTGT_COOP = "Cooperative";
LTGT_CTF = "Capture The Flag";
LTGT_DM = "Deathmatch";
LTGT_FB = "Flag Ball";
LTGT_KOTH = "King Of The Hill";
LTGT_SD = "Search And Destroy";
LTGT_TDM = "Team Deathmatch";
LTGT_TKOTH = "Team King Of The Hill";
LT_ARMORY = "$AThe Armory:$BBy entering an armory and activating the loadout menu, you can change your specialty and the weapons you are carrying. Activating the loadout screen will automatically reload all your ammunition if no changes are made.

";
LT_Continue = "Continue";
LT_EWEAPS = "$AEmplaced Weapons:$BYou can use any emplaced weapons by pressing the SHIFT key. This includes weapons onboard a Black Hawk or Humvee.

";
LT_MAPLEGEND = "$AMap Legend:$BPress the F12 key to bring up a list of map icons and their descriptions.

";
LT_MEDICS = "$AMedics:$BIf you are wounded, you have a limited time to be revived by a medic. You can call for a medic by pressing the 9 key. Medics press 9 to equip a medic pack and then press the FIRE button to revive a wounded teammate. Press the SPACEBAR to begin fighting from where you fell. If you die by a shot to the head, suicide or fratricide you cannot be revived.

";
LT_PRIMARY_AD = "$AObjective:$BOne team is on offense and must destroy specific targets guarded by the defensive team. The offense wins by destroying all enemy targets. The defense wins by having at least one target left when the game timer runs out.

$ATargets:$BBoth sides have targets they must defend from the other side. Targets are marked on your HUD with small squares colored by team. Attack the opposing team's color. Up close, targets are identified by a dull glow.

$ARespawn Timers:$BWhen you are killed, there is a delay before you can respawn. PSP's have longer respawn limits. When you are killed, both timers will be displayed along with your medic timer. Once the timer reaches zero, you can press the SPACEBAR to respawn at your team's initial spawn point.

$AScoring:$BCumulative points are awarded for destroying objectives, headshots, knife kills, etc. Points are removed for fratricides, suicides, and being killed by another player. Press the G key to get game rules and scoring information. Press the A key during the end-game score screen to see more stats.

$AWaypoints:$BA green waypoint line will point you to one of the remaining enemy targets. You can cycle through waypoints to choose a different target.

";
LT_PRIMARY_CTF = "$AObjective:$BCapture all flags of the opposing team's color by returning them to your flag bay before the opposition captures your team's flags.

$APicking Up Flags:$BTo pick up a flag of the opposing team's color, run over it. If you are carrying a flag, a flag icon will appear on your HUD.

$ASaving Flags:$BIf a flag carrier is killed, they will drop the flag. Run over flags of your team's color to return it to its original start point. You will get points for saving a flag.

$ARespawn Timers:$BWhen you are killed, there is a delay before you can respawn. PSP's have longer respawn limits. When you are killed, both timers will be displayed along with your medic timer. Once the timer reaches zero, you can press the SPACEBAR to respawn at your team's initial spawn point.

$AScoring:$BCumulative points are awarded for capturing a flag, killing a flag carrier, killing someone near the flag, headshots, etc. Points are removed for fratricides, suicides, and being killed by another player. Press the G key to get game rules and scoring information. Press the A key during the end-game score screen to see more stats.

$AWaypoints:$BWhen you pick up a flag, a green waypoint line will show you the direction to your own team's flag bay. When you drop off a flag the waypoint will point to another flag on the map.

";
LT_PRIMARY_DM = "$AObjective:$BGain the highest score by eliminating other players in the map. There are no teams.

$ARespawn Timer:$BWhen you are killed, there is a delay before you can respawn. This timer appears when you are dead. Once the timer reaches zero, you can press the SPACEBAR to respawn at a random point on the map.

$AScoring:$BCumulative points are awarded for headshots, knife kills, etc. Points are removed for suicides and being killed by another player. Press the G key to get game rules and scoring information. Press the A key during the end-game score screen to see more stats.

";
LT_PRIMARY_FB = "$AObjective:$BFind the single flag in the map and return it to your team's flag bay. The flag appears as a green flag icon on your Spin Map until it is picked up.

$APicking Up Flags:$BTo pick up a flag, run over it. If you are carrying the flag, a flag icon will appear on your HUD.

$AFlag Carriers:$BIf a flag carrier is killed, they will drop the flag. If no one picks up the flag within a certain time, it will return to its original position near the center of the field.

$ARespawn Timers:$BWhen you are killed, there is a delay before you can respawn. PSP's have longer respawn limits. Once the timer reaches zero, you can press the SPACEBAR to respawn at your team's initial spawn point.

$AScoring:$BCumulative points are awarded for capturing a flag, killing a flag carrier, killing someone near the flag, knife kills, etc. Points are removed for fratricides, suicides, and being killed by another player. Press the G key to get game rules and scoring information. Press the A key during the end-game score screen to see more stats.

$AWaypoints:$BWhen you pick up the flag a green waypoint line will show you the direction to your own team's flag bay. When you drop off the flag the waypoint line will direct you to the respawned flag's new position.

";
LT_PRIMARY_KOTH = "$AObjective:$BOccupy the "Hot Zone" until your timer reaches the target time first. Eliminate other players to make their timers count backwards.

$AHot Zone:$BThe King of the Hill Hot Zone is marked on your HUD by a circle. If you are inside the zone, you will see a display noting how far inside the zone you are. 1% is right on the edge, 90% is near the center.

$AHot Zone Timer:$BThe person who's timer reaches the target time first wins the match. As long as you are in the zone, your timer will count up. If you are not in the zone, your timer will count down.

$ARespawn Timers:$BWhen you are killed, there is a delay before you can respawn. PSP's have longer respawn limits. When you are killed, both timers will be displayed along with your medic timer. Once the timer reaches zero, you can press the SPACEBAR to respawn at a random point on the map.

$AScoring:$BCumulative points are awarded for killing someone inside the Hot Zone, headshots, knife kills, etc. Points are removed for suicides and being killed by another player. Press the G key to get game rules and scoring information. Press the A key during the end-game score screen to see more stats.

$AWaypoints:$BA waypoint line on your HUD's Spin Map will point you to the Hot Zone.

";
LT_PRIMARY_SD = "$AObjective:$BEach team must enter the opposing team's territory and destroy specific targets with satchel charges. The first team to destroy all enemy targets wins.

$ATargets:$BOne side has targets they must defend from the other side. Targets are marked on your HUD with small squares colored by team. Attack the opposing team's color. Up close, targets are identified by a dull glow.

$ARespawn Timers:$BWhen you are killed, there is a delay before you can respawn. PSP's have longer respawn limits. When you are killed, both timers will be displayed along with your medic timer. Once the timer reaches zero, you can press the SPACEBAR to respawn at your team's initial spawn point.

$AScoring:$BCumulative points are awarded for destroying objectives, headshots, knife kills, etc. Points are removed for fratricides, suicides, and being killed by another player. Press the G key to get game rules and scoring information. Press the A key during the end-game score screen to see more stats.

$AWaypoints:$BA waypoint line will direct you to one of the remaining enemy targets. You can cycle through waypoints to choose a different target.

";
LT_PRIMARY_TDM = "$AObjective:$BGain the highest team score by eliminating players belonging to the opposing team.

$ARespawn Timers:$BWhen you are killed, there is a delay before you can respawn. PSP's have longer respawn limits. When you are killed, both timers will be displayed along with your medic timer. Once the timer reaches zero, you can press the SPACEBAR to respawn at your team's initial spawn point.

$AScoring:$BCumulative points are awarded for headshots, knife kills, etc. Points are removed for suicides and being killed by another player. Press the G key to get game rules and scoring information. Press the A key during the end-game score screen to see more stats.

";
LT_PRIMARY_TKOTH = "$AObjective:$BOccupy the Hot Zone until your team's timer reaches the target time first. Reset your opponent's timer to zero by eliminating all of their team from the zone.

$AHot Zone:$BThe King of the Hill Hot Zone is marked on your HUD by a circle. If you are inside the zone, you will see a display noting how far inside the zone you are. 1% is right on the edge, 90% is near the center.

$AHot Zone Timer:$BAs long as one player from a team is inside the circle, their team's timer will continue to count up. Once a team's timer reaches the target time, that team wins. As soon as a team has no players inside the Hot Zone, that team's timer will reset to zero.

$ARespawn Timers:$BWhen you are killed, there is a delay before you can respawn. PSP's have longer respawn limits. When you are killed, both timers will be displayed along with your medic timer. Once the timer reaches zero, you can press the SPACEBAR to respawn at your team's initial spawn point.

$AScoring:$BCumulative points are awarded for time in the zone, killing someone inside the Hot Zone, knife kills, etc. Points are removed for fratricides, suicides, and being killed by another player. Press the G key to get game rules and scoring information. Press the A key during the end-game score screen to see more stats.

$AWaypoints:$BA waypoint line on your HUD's Spin Map will point you to the Hot Zone.

";
LT_PSPS = "$APSPs:$BIf your team controls a Progressive Spawn Point (indicated by a flashing box on your map), you can choose to respawn there instead of the default spawn area. To capture a PSP, run up and touch it. It will flash green for fifteen seconds and then turn to your team's color. When you are killed, a map will show you the PSP's and the corresponding keys to press to respawn at one.

";
LT_SERVERMSG = "Message From Game Server";

'[Misc]'
STRMISC_ENTERCMD = "Enter Command:";
STRMISC_FRIENDLYTAGS_BRIEF = "Friendly Tags: Brief";
STRMISC_FRIENDLYTAGS_FULL = "Friendly Tags: On";
STRMISC_FRIENDLYTAGS_OFF = "Friendly Tags: Off";
STRMISC_INFAMMO = "Wuss.";
STRMISC_LASTGAME_OFF = "Last Game: Off";
STRMISC_LASTGAME_ON = "Last Game: On";
STRMISC_LOCKGAME_OFF = "Lock Game: Off";
STRMISC_LOCKGAME_ON = "Lock Game: On";
STRMISC_MOUSESCALE = "Mouse scale set to $A (128 is nominal).";
STRMISC_NEWOBJECTIVE = "An objective has been added.";
STRMISC_SCOPESCALE = "Scope scale set to $A.";
STRMISC_TALK = "Enter Message:";
STRMISC_TALKBLUE = "Enter Blue Team Message:";
STRMISC_TALKRED = "Enter Red Team Message:";
STRMISC_TALKTEAM = "Enter Team Message:";
STRMISC_USEGUNMSG = "Press '$A' to attach to the $B";
STRMISC_VERBOSE_OFF = "Verbose: Off";
STRMISC_VERBOSE_ON = "Verbose: On";
STRMISC_BERZERK = "You have killed too many friendlies.";

'[TimeOfDay]'
DAWN = "Dawn";
DAY = "Day";
DUSK = "Dusk";
NIGHT = "Night";
UNKNOWN = "Unknown";

'[ServerCTA]'
? = "?";
Delta = "D";
Ranger = "R";
Tenth = "T";
Cqb = "C";
Medic = "M";
Sniper = "S";
Gunner = "G";
Demo = "D";

'[GateTypeAbbrev]'
COOP = "COOP";
DM = "DM";
TDM = "TDM";
KOTH = "KOTH";
TKOTH = "TKOTH";
CTF = "CTF";
SD = "SD";
AD = "AD";
FB = "FB";
FM = "FM";

'[WPNames]'
STRWPNAME000 = "Null";
STRWPNAME001 = "Alpha";
STRWPNAME002 = "Bravo";
STRWPNAME003 = "Charlie";
STRWPNAME004 = "Delta";
STRWPNAME006 = "Foxtrot";
STRWPNAME007 = "Golf";
STRWPNAME008 = "Hotel";
STRWPNAME009 = "India";
STRWPNAME010 = "Joker";
STRWPNAME011 = "Kilo";
STRWPNAME012 = "Lima";
STRWPNAME013 = "Mike";
STRWPNAME014 = "November";
STRWPNAME015 = "Oscar";
STRWPNAME016 = "Papa";
STRWPNAME017 = "Quebec";
STRWPNAME018 = "Romeo";
STRWPNAME019 = "Sierra";
STRWPNAME020 = "Tango";
STRWPNAME021 = "Uniform";
STRWPNAME022 = "Victor";
STRWPNAME023 = "Whiskey";
STRWPNAME024 = "X-Ray";
STRWPNAME025 = "Yankee";
STRWPNAME026 = "Zulu";
STRWPNAME005 = "Echo";
STRWPNAMEFLAG = "Flag";
STRWPNAMEFLAGBAY = "Flag Bay";
STRWPNAMEARMORY = "Armory";
STRWPNAMETARGET = "Target";
`,
  "resources/game_strings/known_stringkeys_to_text_1.txt": `000_NULL = "000 - Null"
ABOUT_CODER = "Written by Mark Maestas, Pete Sandrene and Trevor Walker"
ABOUT_COPYRIGHT = "Copyright 2002, NovaLogic, Inc."
ABOUT_HELP = "For details on how to use DFBHDMED, please refer to the DFBHDMED.PDF file."
ABOUT_MED = ""About DFBHDMED"
ABOUT_VERSION = "Version %s"
ABSOLUTE_HEIGHT = "Absolute Height"
ABSOLUTE_MODE = "Absolute Mode"
ACCURACY_100 = "Accuracy (100ths)"
ACCURACY_TO = " accuracy to %i"
ACTION_SUBTYPE = "Action Subtype"
ACTION_TYPE = "Action Type"
ACTION_VARIABLES = "Action Variables"
ACTIVE_AREA = "Active Area"
ADD_VARIABLE = "Increment Variable"
AIAIMSKILL_TO = " gunner skill is %s"
AICLEARWPZ_TO = " stop using waypoint Z"
AICOMBAT_TO = " combat speed = %d km/h"
AIDRIVESKILL_TO = " driver skill is %s"
AINODEPATH_BIT = "Autonomous Behavior"
AINODEPATH_OFF = " do not use Autonomous Behavior"
AINODEPATH_ON = " use Autonomous Behavior"
AIPATROL_TO = " patrol speed = %d km/h"
AISTATE_TO = " AI state to %s"
AITARGET_TO = " target SSN %d"
AIUSEWPZ_TO = " use waypoint Z"
AI_ATTRIBUTES = "AI Attributes"
AI_VARIABLES = "AI Variables"
AK47_AUTO = "AR - AK47, auto"
AK47_BURST = "AR - AK47, burst"
AK47_SEMI = "AR - AK47, semi"
ALL_DESTROYED = "All Destroyed"
ALL_INTACT = "All Intact"
ALTITUDE_AGL = "Altitude AGL Flash"
ALTITUDE_ASL = "Altitude ASL Flash"
ALWAYS_OFF = "Always OFF"
ALWAYS_ON = "Always ON"
ANY_ALIVE = "Any Alive"
AREATRIGGER_LIST_HEADER = ""// Area Trigger List for %s, saved on %i/%i/%i, %i:%2i"
AREA_AI_BLUE = "Change AI in Area, Blue"
AREA_AI_RED = "Change AI in Area, Red"
AREA_ID = "Area ID"
AREA_TRIGGER = "Area Trigger"
AREA_TRIGGERS = "Area Triggers"
ARMORY_ONLY = "Armory ONLY"
ATTACH_TO_EMPLACED = "Attach SSN To Emplaced Weapon"
ATTACH_TO_EMPLACED_TO = "Attach SSN %d to nearest emplaced weapon"
ATTACKDISTANCE_VALUE = "Attack Distance (meters)"
ATTACK_AND_DEFEND = "ATTACK AND DEFEND"
ATTACK_DISTANCE_TO = " set Attack Distance to %d"
AWACS_RADAR = "AWACS Radar"
BERSERK_BIT = "Berserk (0 or 1)"
BERSERK_OFF = " not berserk"
BERSERK_ON = " berserk"
BLIND_BIT = "Blind (0 or 1)"
BLIND_OFF = " not blind"
BLIND_ON = " blind"
BLUE_WIN = "Win, Blue"
BONUS_EXPIRATION = "Bonus Expiration"
BREAK_LEFT = "Break Left"
BREAK_RIGHT = "Break Right"
CALICO_AUTO = "SMG - Calico, auto"
CALICO_BURST = "SMG - Calico, burst"
CALICO_SEMI = "SMG - Calico, semi"
CANT_CREATE_DIB = "Warning: Unable to create DIB for rendering."
CANT_LOAD_ITEMS_DEF = "Warning: Unable to load file items.def"
CAPTURE_THE_FLAG = "CAPTURE THE FLAG"
CHANGE_ALL_BLUE_IN_AREA = "Change all Blue AI in area %i : %s"
CHANGE_ALL_RED_IN_AREA = "Change all Red AI in area %i : %s"
CHANGE_GROUP = "Change Group %i AI : %s"
CHANGE_GROUP_ACTION = "Change Group, Group"
CHANGE_GROUP_AI = "Change AI, Group"
CHANGE_GROUP_STRING = "Change Group %i to Group %i"
CHANGE_GTEAM_ACTION = "Change Team, Group"
CHANGE_GTEAM_STRING = "Change Group %i to Team "
CHANGE_SINGLE = "Change SSN %d AI : %s"
CHANGE_SINGLE_AI = "Change AI, Single"
CHANGE_SINGLE_STRING = "Change SSN %i to group %i"
CHANGE_STEAM_ACTION = "Change Team, SSN"
CHANGE_STEAM_STRING = "Change SSN %i To Team "
CHAR_TILE = "Char Tile"
CLEAR_THIS_MISSION = "Clear this mission?"
CLEAR_THIS_TILESET = "Clear all tiles from the map?"
CLIMBER_BIT = "Climber (0 or 1)"
CLIMBER_OFF = " not a climber"
CLIMBER_ON = " climber"
COLLISION_MODELS = "Collision Models"
COLOR_MAP_BUTTON = "C"
COMPASS_LOLLYPOP = "Waypoint Lollypop Flash"
COMPASS_WPKARAT = "Waypoint Karat Flash"
CONDITION_RED = "Condition Red"
CONDITION_YELLOW = "Condition Yellow"
COPY_EVENT = "Copy Event"
COWARD_BIT = "Coward (0 or 1)"
COWARD_OFF = " uncowardly"
COWARD_ON = " cowardly"
DECREMENT_VARIABLE = "Decrement Variable by 1"
DEFAULT_GRID_SIZE = "1m"
DEFAULT_LAYER = "Default Layer (Always Visible)"
DEF_EXT = "txt"
DELAY_EVENT = ""  Delay event %i seconds"
DELAY_SEC = "Delay (seconds)"
DELETE_EVENT = "Delete Event"
DEPTHPIXEL_MODE = "Depth Pixel X: %3d Y: %3d"
DEPTH_MAP_BUTTON = "H"
DFMED_TITLE = "DFBHDMED %s %s"
DFMED_TITLE_PLUS_FNAME = "DFBHDMED %s %s - %s"
DF_CENTER_POS = "X: %f, Y: %f (m)"
DF_GRID_SIZE_CM = "%.3fcm"
DF_GRID_SIZE_M = "%im"
DF_IN_FILTER_DES = "ASCII Mission file (*.mis)"
DF_IN_FILTER_EXT = "*.mis"
DF_OUT_FILTER_DES = "Binary mission file (*.bms)"
DF_OUT_FILTER_EXT = "*.bms"
DIALOG_FILE = "Dialog File (*.dbf)"
DLG_MSG_10 = "The maximum number of wind gusts is 24."
DLG_MSG_11 = "Error allocating memory for windgust data."
DLG_MSG_12 = "Start time must be less then or equal to stop time."
DLG_MSG_13 = "Wind speed values range from 0 - 128."
DLG_MSG_14 = "Negative values are not allowed."
DLG_MSG_4 = "Name"
DLG_MSG_5 = "start"
DLG_MSG_6 = "stop"
DLG_MSG_7 = "heading"
DLG_MSG_8 = "speed"
DLG_MSG_9 = "(NO NAME)"
DOUBLE_AMMO = "Double Ammo Load"
EDIT_AREATRIGGERS = "&Area Triggers"
EDIT_BRIEFING = "&Briefing"
EDIT_COPY = "Copy"
EDIT_CUT = "Cut"
EDIT_DELETE = "Delete"
EDIT_DEPTHPIXELMODE = "Depth Pixel Mode"
EDIT_EVENTS = "&Events"
EDIT_GENERALINFO = "General &Information"
EDIT_GROUPS = "&Groups"
EDIT_INSERTMODE = "Insert Mode"
EDIT_ITEM_ATTRIBUTES = "Edit Item Attributes"
EDIT_LAYERNAMES = "&Layer Names"
EDIT_PASTE = "Paste"
EDIT_REDO = "&Redo"
EDIT_REPLACE = "&Global Replace"
EDIT_SELECTSSN = "&Select Items"
EDIT_SORTOBJ = "&Cleanup SSNs"
EDIT_UNDO = "&Undo"
EDIT_WAYPOINTS = "&Waypoints"
ENGAGEDISTANCE_MAXVALUE = "Max Engagement Distance (meters)"
ENGAGEDISTANCE_MINVALUE = "Min Engagement Distance (meters)"
ENGAGE_DISTANCE_TO = " engagement range (%dm - %dm)"
ERROR_MSG = "Error"
ERROR_NAMETOOLONG = "The filename you have entered is too long.  With the extension, it must be less than 32 characters.  Please shorten the name and try again."
EVENT_ACTION = "Event Action"
EVENT_DOWN = "Down"
EVENT_HEADER = ""// Event %i for %s, saved on %i/%i/%i, %i:%02i"
EVENT_LIST_HEADER = ""// Event List for %s, saved on %i/%i/%i, %i:%02i"
EVENT_NOT_TRIGGERED = "Event %i has not been triggered"
EVENT_NUM = "Event %i"
EVENT_NUMBER = ""Event %i: %s"
EVENT_NUMBER_STRING = "Event Number"
EVENT_TRIGGER = "Event Trigger"
EVENT_TRIGGERED = "Event %i has been triggered"
EVENT_UP = "Up"
EXECUTE_WAC = "Execute WAC"
FILE_CLEAR = "&Clear"
FILE_EXIT = "E&xit"
FILE_EXPORT = "&Export Binary Mission"
FILE_OPEN = "&Open"
FILE_SAVEANDEXPORT = "&Save and Export"
FILE_SAVEAS = "Save &As"
FIND_AND_USE = "Find and Use SSN"
FIND_AND_USE_SSN = "Find and Use SSN %d"
FIRE_MISSIONS_AVAILABLE = "Air Strikes Available"
FIRING_ANGLE = "Firing Angle"
FIRING_ANGLE_TO = "Firing Angle: %d degrees"
FIRST_ORDER_MAP_BUTTON = "D"
FOG_COLOR = "Fog Color"
FOG_LEVEL = "Fog Distance (m)"
FOV_CONES = "FOV Cones"
FULL_HP = "Full Health"
G11_AUTO = "AR - G11, auto"
G11_BURST = "AR - G11, burst"
G11_SEMI = "AR - G11, semi"
GENERAL_INFORMATION = "General Information"
GEOM_ZERO = "Some items have geometry that lie below zero"
GET_CENTER = "Get Center"
GLOCK_AUTO = "P - Glock18, auto"
GLOCK_SEMI = "P - Glock18, semi"
GOTO_GROUP = "Goto Group"
GOTO_PLAYER = "Goto Player"
GOTO_SSN = "Goto SSN"
GREATER_THAN = "Greater Than"
GREATER_THAN_EQUAL = "Greater Than or Equal To"
GREEN_ALERT = "Green Alert"
GREEN_WIN = "Win, Green (Neutral)"
GRENADE_DELAYED = "Grenade, Delayed"
GRENADE_FRAG = "Grenade, Fragmentation"
GROUP_ALIVE = "Group %i is still alive"
GROUP_AT_RED_ALERT = "Group %i is at red alert"
GROUP_AT_WAYPOINT = "Group %i reaches waypoint %i, %i"
GROUP_AT_YELLOW_ALERT = "Group %i is at yellow alert"
GROUP_CLOSE_DOOR_ACTION = "Close Doors, Group"
GROUP_CLOSE_DOOR_STRING = "Close all doors in Group %d"
GROUP_COLON = "Group:"
GROUP_DESTROYED = "Group %i has been destroyed"
GROUP_HAS_LOST_MORE_UNITS = "Group %i has lost %i or more units"
GROUP_HAS_MORE_UNITS = "Group %i has %i or more units"
GROUP_HAS_NOT_LOST_MORE_UNITS = "Group %i has not lost %i or more units"
GROUP_HAS_NOT_SHOT_GROUP = "Group %i has not shot Group %i"
GROUP_HAS_NOT_SHOT_SINGLE = "Group %i has not shot SSN %i"
GROUP_HAS_NOT_TARGETED_GROUP = "Group %i has not targeted Group %i"
GROUP_HAS_NOT_TARGETED_SINGLE = "Group %i has not targeted SSN %i"
GROUP_HAS_SHOT_GROUP = "Group %i has shot Group %i"
GROUP_HAS_SHOT_SINGLE = "Group %i has shot SSN %i"
GROUP_HAS_TARGETED_GROUP = "Group %i has targeted Group %i"
GROUP_HAS_TARGETED_SINGLE = "Group %i has targeted SSN %i"
GROUP_HOLDING_GROUP = "Group %i holds Group %i"
GROUP_INTACT = "Group %i is all intact"
GROUP_IS_NOT_WITHIN_AREA = "Group %i is not within area %i"
GROUP_IS_WITHIN_AREA = "Group %i is within area %i"
GROUP_LESS_THAN = "Group %i has less than %i units"
GROUP_LIST_HEADER = ""// Group List for %s, saved on %i/%i/%i, %i:%2i"
GROUP_NONE = "0 - None"
GROUP_NOT_ALIVE = "Group %i has been destroyed"
GROUP_NOT_AT_RED_ALERT = "Group %i is not at red alert"
GROUP_NOT_AT_WAYPOINT = "Group %i has not reached waypoint %i, %i"
GROUP_NOT_AT_YELLOW_ALERT = "Group %i is not at yellow alert"
GROUP_NOT_DESTROYED = "Group %i has not been destroyed"
GROUP_NOT_HOLDING_GROUP = "Group %i does not hold Group %i"
GROUP_NOT_INTACT = "Group %i is not all intact"
GROUP_NOT_SEES_GROUP = "Group %i does not see Group %i"
GROUP_NOT_SEES_SINGLE = "Group %i does not see SSN %i"
GROUP_OPEN_DOOR_ACTION = "Open Doors, Group"
GROUP_OPEN_DOOR_STRING = "Open all doors in Group %d"
GROUP_REDIRECT_TO = "Redirect group %i to nearest waypoint in list %i"
GROUP_REDIRECT_TO_POINT = "Redirect group %i to waypoint %i - %i"
GROUP_RESET_HASVISITED = "Reset Has Visited Flags, Group"
GROUP_RESET_HASVISITED_TO = "Reset waypoints Group %d has visited"
GROUP_ROTATE = "Group Rotate"
GROUP_SEES_GROUP = "Group %i sees Group %i"
GROUP_SEES_SINGLE = "Group %i sees SSN %i"
GROUP_TARGET_GROUP_EXC = "Target Group by Group, Exclusive"
GROUP_TARGET_GROUP_EXC_STR = "Group %d exclusively target Group %d"
GROUP_TARGET_GROUP_PRI = "Target Group by Group, Priority"
GROUP_TARGET_GROUP_PRI_STR = "Group %d prioritize target Group %d"
GROUP_TARGET_SSN_EXC = "Target SSN by Group, Exclusive"
GROUP_TARGET_SSN_EXC_STR = "Group %d exclusively target SSN %d"
GROUP_TARGET_SSN_PRI = "Target SSN by Group, Priority"
GROUP_TARGET_SSN_PRI_STR = "Group %d prioritize target SSN %d"
GROUP_TELEPORT_ACTION = "Teleport Group"
GROUP_TELEPORT_STRING = "Teleport group %i to target %i"
GROUP_VELOCITY = "Velocity, Group"
GUARD_BIT = "Guard ( 0 or 1)"
GUARD_OFF = " do not guard"
GUARD_ON = " guard"
HAS_X_HP = "Has X Health"
HAS_X_UNITS = "Has X Units"
HEIGHT_LOCK = "&Lock"
HIDE_ALL = "Hide All"
HIDE_LOSE_SUBGOAL_TO = "Hide Lose Subgoal %d"
HIDE_NOEVENT_SSN = "Only Show SSNs with Events Attached"
HIDE_WAYPOINTS_TO = "Hide Waypoints"
HIDE_WIN_SUBGOAL_TO = "Hide Win Subgoal %d"
HK_P11 = "P - HK P11 (Underwater Pistol)"
HOLDS_ITEM = "Holds Item"
IF_TRIGGERS = "IF ( Triggers )"
IGNORE_FOOTSTEPS = "Ignore Footsteps"
INCREMENT_VARIABLE = "Increment Variable by 1"
INDESTRUCTABLE_BIT = "Indestructable (On/Off)"
INDESTRUCTABLE_OFF = " destroyable"
INDESTRUCTABLE_ON = " indestructable"
INFO_ABOUTDFMED = "&About DFBHDMED"
INSERT_MODE = "Insert Mode"
ITEM_COLORS = "Item Colors"
ITEM_GROUP = "Item Group"
ITEM_NAME = "Name: %s"
ITEM_NUM = "Item #%i"
ITEM_TYPE = "Type: %i"
ITEM_WAYPOINT = "Waypoint: %i, %i"
ITEM_X_POS = "X: %i.%i"
ITEM_Y_POS = "Y: %i.%i"
ITEM_Z_POS = "Z: %i.%i"
KEVLAR_VEST = "Kevlar Vest"
KILL_GROUP = "Kill Group"
KILL_GROUP_X = "Kill Group %i"
KILL_SINGLE = "Kill SSN"
KILL_SINGLE_X = "Kill SSN %i"
KING_OF_THE_HILL = "KING OF THE HILL"
LAYER_BUTTON = "Layers"
LAYER_NAMES = "Layer Names"
LAYER_NUM = "%i - (unnamed)"
LAYER_VISIBILITY = "Layer Visibility"
LESS_THAN = "Less Than..."
LESS_THAN_EQUAL = "Less Than or Equal To"
LOADOUT_RESTRICT = "Loadout Restrictions"
LOADOUT_SP = "Default Loadout (Single Player ONLY)"
LOSE_CONDITION = "Lose Conditions"
LOST_X_HP = "Lost X Health"
LOST_X_UNITS = "Lost X Units"
M4_BURST = "AR - M4, burst"
M4_SEMI = "AR - M4, semi"
M4_SHOTGUN = "AR - M4, shotgun"
MAP_SYMBOL = "Map Symbol"
MAP_TYPES = "Map Types"
MAP_ZOOM = "Starting Spin-map Zoom"
MASTER_KEY = "AR - M4 "Master Key""
MAX_NUM_AREA_TRIGGERS = "Exceeded Maximum Number of Area Triggers"
MAX_NUM_WAYPOINTS = "Exceeded Maximum Number of Waypoints"
MAX_SAVES = "Max Saved Games"
MISSION_AREA = "Designated Mission Area"
MISSION_CRITICAL = "[Mission Critical]"
MISSION_CRITICAL_ITEM = "Mission Critical Item"
MISSION_DESIGNER = "Mission Designer"
MISSION_FILE = "Mission File (*.rc)"
MISSION_NAME = "Mission Name"
MISSION_TERRAIN = "Mission Terrain"
MISSION_TTILE = "Mission Tiles"
MISSION_VARIABLE = "Mission Variable"
MISVAR_ADD = "Increment Mission Var#%i by %i"
MISVAR_CHANGE = "Change Mission Variable"
MISVAR_DEC = "Decrement Mission Var#%i by 1"
MISVAR_INC = "Increment Mission Var#%i by 1"
MISVAR_IS_EQUAL = "Mission Var#%i is equal to %i"
MISVAR_IS_GT = "Mission Var#%i is greater than %i"
MISVAR_IS_GTE = "Mission Var#%i is greater than or equal to %i"
MISVAR_IS_LT = "Mission Var#%i is less than %i"
MISVAR_IS_LTE = "Mission Var#%i is less than or equal to %i"
MISVAR_IS_NOT_EQUAL = "Mission Var#%i is not equal to %i"
MISVAR_SET = "Set Mission Var#%i to %i"
MISVAR_SUB = "Decrement Mission Var#%i by %i"
MORE_THAN = "More Than..."
MOUSE_DESELECTTHISGROUP = "Deselect This Group"
MOUSE_EXITPROGRAM = "Exit Program"
MOUSE_HIDESELECTED = "Hide Selected"
MOUSE_HIDEUNSELECTED = "Hide Unselected"
MOUSE_MOVE = "Move"
MOUSE_SELECTTHISBLINKGROUP = "Select This Blink Group"
MOUSE_SELECTTHISGROUP = "Select This Group"
MOUSE_SELECTTHISWAYLIST = "Select This Waypoint List"
MOUSE_SELECTTYPE = "Select This Type"
MOUSE_SNAPTOGRIDLINE = "Snap To Grid Line"
MOUSE_UNHIDEALL = "Unhide All"
MP5_AUTO = "SMG - MP5, auto"
MP5_BURST = "SMG - MP5, burst"
MP5_SEMI = "SMG - MP5, semi"
NAVIGATION_WAYPT = "Navigation Waypoint"
NEW_ACTION = "<< New Action >>"
NEW_EVENT = "<< New Event >>"
NEW_TRIGGER = "<< New Trigger >>"
NICE_DAY = "Nice Day"
NOT_SECOND_TIME_THROUGH = "Odd Numbered Time Playing"
NO_ITEMS = "No Items Selected"
NO_TILES = "No Tiles Selected"
NO_WATER = "Afraid To Swim"
NPC_WEAPON = "NPC Primary Weapon"
NUM_HITS = "Num Hits"
NUM_UNITS = "Num Units"
NVG_AVAILABLE = "Night Vision Goggles Available"
NVG_START_ON = "Start with NVG Turned On"
OICW_BURST = "AR - OICW, burst"
OICW_GRENADE = "GL - OICW, grenade"
OICW_SEMI = "AR - OICW, semi"
OPENNING_READONLY = "Warning: File ( %s ) is READ-ONLY.  Any changes will NOT be saved."
OUTPUT_TEXT = "Output Text"
PAGE_1 = "Page &1"
PAGE_1_BUTTON = "P1"
PAGE_2 = "Page &2"
PAGE_2_BUTTON = "P2"
PAINT_MODE = "Paint Mode"
PANCOR_AUTO = "SG - Pancor, auto"
PANCOR_SEMI = "SG - Pancor, semi"
PARTICLE_EFFECT_ACTION = "Create Particle Effect"
PARTICLE_EFFECT_STRING = "Create particle effect at teleport target %d"
PASTE_EVENT = "Paste Event"
PLAYER_1STPERSON = "Player is in 1st-person View"
PLAYER_1STPERSON_NOT = "Player is not in 1st-person view"
PLAYER_1STPERSON_TEST = "View, 1st Person No Weapon"
PLAYER_3RDPERSON = "Player is in 3rd-person view"
PLAYER_3RDPERSON_NOT = "Player is not in 3rd-person view"
PLAYER_3RDPERSON_TEST = "View, 3rd Person"
PLAYER_AWOL = "Player has been outside of mission area for %d seconds"
PLAYER_AWOL_NOT = "Player has not been outside of mission area for %d seconds"
PLAYER_AWOL_TEST = "Outside of Mission Area"
PLAYER_BERSERK = "Player is berserk"
PLAYER_BERSERK_NOT = "Player is not berserk"
PLAYER_BERSERK_TEST = "Berserk"
PLAYER_CLEARINPUT_STRING = "clear input test buffer"
PLAYER_COCKPITVIEW = "Player is in 1st-Person Weapon view"
PLAYER_COCKPITVIEW_NOT = "Player is not in 1st-Person Weapon view"
PLAYER_COCKPITVIEW_TEST = "View, 1st-Person Weapon"
PLAYER_DLGDONE = "%s is not currently playing"
PLAYER_DLGDONE_NOT = "%s is currently playing"
PLAYER_DLGDONE_TEST = "Dialog Playing"
PLAYER_DLGFINISHED = "%s is finished playing"
PLAYER_DLGFINISHED_NOT = "%s is not finished playing"
PLAYER_DLGFINISHED_TEST = "Dialog Finished"
PLAYER_HUDFLASH_STRING = "flash hud %s for %d ticks"
PLAYER_SATCHEL = "Player placed a satchel in Area %d"
PLAYER_SATCHEL_NOT = "Player has not placed a satchel in Area %d"
PLAYER_SATCHEL_TEST = "Placed Satchel in Area"
PLAYER_STARTUP_STRING = "start player engines"
PLAYPARTANIM_TO = " %s part anim #%d"
PLAYPARTANIM_TO_S = " %s part anim #%d for %2.4f seconds"
PLAYS_AFTER_END = "(Plays after end)"
PLAY_AFTER_END = "Play after mission end?"
PLAY_WAVLIST = "Play Dialog"
PLAY_WAV_FILE_LIST = "Play dialog ID: %s %s"
POST_MISSION_EVENT = "Post-Mission Event"
PRE_MISSION_EVENT = "Pre-Mission Event"
PRINT_ALL = "Print All Events"
PRINT_EVENT = "Print Event"
PRINT_LIST = "Save As..."
RADAR_BLUES = "Radar Blue (Good) Flash"
RADAR_CIRCLES = "Radar Circles Flash"
RADAR_CROSSES = "Radar Crosses Flash"
RADAR_FARP = "Radar FARP 'H' Flash"
RADAR_REDS = "Radar Red (Evil) Flash"
RADAR_SQUARES = "Radar Squares Flash"
RADAR_TRIANGLES = "Radar Triangles Flash"
RANDOM_FACING = "Random Facing"
REACHED_WAYPOINT = "Reached Waypoint"
REDIRECT_GROUP_TO = "Redirect Group"
REDIRECT_SINGLE_TO = "Redirect SSN"
RED_ALERT = "Red Alert"
RED_WIN = "Win, Red"
REMOVE_IF = "Remove If..."
RESET_AFTER = "Reset after (seconds)"
RESET_EVENT = "Reset Event"
RESET_EVENT_TO = "Reset Event %d"
ROLLS_OVER = "Rolls Over"
ROTATION_AMOUNT = "Rotation:"
SAVED_AND_EXPORTED = "Mission saved and exported successfully"
SAVE_CHAR_INFO = "Would you like to save your char tiler info."
SAW_GROUP = "Saw Group"
SAW_SINGLE = "Saw SSN"
SEARCH_AND_DESTROY = "SEARCH AND DESTROY"
SECOND_TIME = "2nd Time"
SECOND_TIME_THROUGH = "Even Numbered Time Playing"
SELECTED_NUM = "Selected: %i"
SELECT_MARKERS = "Select Markers"
SELECT_MEMBERS = "Select Members"
SET_GROUP_TO_SPEED = "Set Group %i to %ikph"
SET_LIGHT_STATE = "Turn Lights On/Off"
SET_LIGHT_STATE_TO = "Turn Light Group %d %s"
SET_SINGLE_TO_SPEED = "Set SSN %i to %i km/h"
SET_VARIABLE = "Set Variable"
SHOT_GROUP = "Shot Group"
SHOT_SINGLE = "Shot SSN"
SHOW_ALL = "Show All"
SHOW_LOSE_SUBGOAL = "Show Lose Subgoal"
SHOW_LOSE_SUBGOAL_TO = "Show Lose Subgoal %d"
SHOW_WAYPOINTS = "Show Waypoints"
SHOW_WAYPOINTS_TO = "Show Waypoints"
SHOW_WIN_SUBGOAL = "Show Win Subgoal"
SHOW_WIN_SUBGOAL_TO = "Show Win Subgoal %d"
SINGLE_ALIVE = "SSN %i is alive"
SINGLE_AT_RED_ALERT = "SSN %i is at red alert"
SINGLE_AT_WAYPOINT = "SSN %i has reached waypoint %i, %i"
SINGLE_AT_YELLOW_ALERT = "SSN %i is at yellow alert"
SINGLE_CHANGE_GROUP = "Change Group, SSN"
SINGLE_DESTROYED = "SSN %i is dead"
SINGLE_HAS_LOST_MORE_UNITS = "SSN %i has lost %i or more health"
SINGLE_HAS_MORE_UNITS = "SSN %i has %i or more health"
SINGLE_HAS_NOT_LOST_MORE_UNITS = "SSN %i has not lost %i or more health"
SINGLE_HAS_NOT_SHOT_GROUP = "SSN %i has not shot Group %i"
SINGLE_HAS_NOT_TARGETED_GROUP = "SSN %i has not tageted Group %i"
SINGLE_HAS_NOT_TARGETED_SINGLE = "SSN %i has not targeted SSN %i"
SINGLE_HAS_SHOT_GROUP = "SSN %i has shot Group %i"
SINGLE_HAS_TARGETED_GROUP = "SSN %i has targeted Group %i"
SINGLE_HAS_TARGETED_SINGLE = "SSN %i has target SSN %i"
SINGLE_HOLDING_GROUP = "SSN %i does hold Group %i"
SINGLE_INTACT = "SSN %i has full health"
SINGLE_IS_NOT_WITHIN_AREA = "SSN %i is not within area %i"
SINGLE_IS_WITHIN_AREA = "SSN %i is within area %i"
SINGLE_LESS_THAN = "SSN %i has less than %i health"
SINGLE_NOT_ALIVE = "SSN %i has been killed"
SINGLE_NOT_AT_RED_ALERT = "SSN %i is not at red alert"
SINGLE_NOT_AT_WAYPOINT = "SSN %i has not reached waypoint %i, %i"
SINGLE_NOT_AT_YELLOW_ALERT = "SSN %i is not at yellow alert"
SINGLE_NOT_DESTROYED = "SSN %i is not dead"
SINGLE_NOT_HOLDING_GROUP = "SSN %i does not hold Group %i"
SINGLE_NOT_INTACT = "SSN %i does not have full health"
SINGLE_NOT_SEES_GROUP = "SSN %i does not see Group %i"
SINGLE_NOT_SEES_SINGLE = "SSN %i does not see SSN %i"
SINGLE_REDIRECT_TO = "Redirect SSN %i to nearest waypoint in list %i"
SINGLE_REDIRECT_TO_POINT = "Redirect SSN %i to waypoint %i-%i"
SINGLE_RESET_HASVISITED = "Reset Has Visited Flags, SSN"
SINGLE_RESET_HASVISITED_TO = "Reset waypoints SSN %d has visited"
SINGLE_SEES_GROUP = "SSN %i sees Group %i"
SINGLE_SEES_SINGLE = "SSN %i does see SSN %i"
SINGLE_TELEPORT_ACTION = "Teleport SSN"
SINGLE_TELEPORT_STRING = "Teleport SSN %i to target %i"
SINGLE_VELOCITY = "Velocity, SSN"
SKY_SETTINGS = "Sky Settings"
SNAP_TO_GRID = "Snap"
SPEED_KPH = "Wind Speed (kph)"
SPINMAP_OVERRIDE = "Spinmap Color Override"
SSN_TARGET_GROUP_EXC = "Target Group by SSN, Exclusive"
SSN_TARGET_GROUP_EXC_STR = "SSN %d exclusively target Group %d"
SSN_TARGET_GROUP_PRI = "Target Group by SSN, Priority"
SSN_TARGET_GROUP_PRI_STR = "SSN %d prioritize target Group %d"
SSN_TARGET_SSN_EXC = "Target SSN by SSN, Exclusive"
SSN_TARGET_SSN_EXC_STR = "SSN %d exclusively target SSN %d"
SSN_TARGET_SSN_PRI = "Target SSN by SSN, Priority"
SSN_TARGET_SSN_PRI_STR = "SSN %d prioritize target SSN %d"
STARTFIRING_BIT = "Firing State"
STARTFIRING_OFF = "Stop Firing"
STARTFIRING_ON = "Start Firing"
STEYR_BURST = "AR - Steyr AUG, burst"
STEYR_GRENADE = "GL - Steyr AUG, grenade"
STEYR_SEMI = "AR - Steyr AUG, semi"
SUB_GOAL_LOST = "Lose Sub Goal"
SUB_GOAL_NUMBER = "Sub Goal Number"
SUB_GOAL_NUM_LOST = "Lose Sub Goal %i %s"
SUB_GOAL_NUM_WON = "Win Sub Goal %i %s"
SUB_GOAL_WON = "Win Sub Goal"
SUB_VARIABLE = "Decrement Variable"
TARGETED_GROUP = "Targeted Group"
TARGETED_SINGLE = "Targeted SSN"
TARGET_SSN = "%2i - (SSN %d)"
TEAMMATE_CALL_EVAC_AT = "Evacuate Teammate to Area Trigger"
TEAMMATE_CALL_EVAC_TT = "Evacuate Teammate to Teleport Target"
TEAMMATE_CALL_MEDIC = "Call Medic for Teammate"
TEAMMATE_ENABLED = "Enabled"
TEAMMATE_EVAC = "Evacuating Teammate"
TEAMMATE_EVACUATE_AT = "Evacuate Teammate (SSN %d) within Area %d"
TEAMMATE_EVACUATE_TT = "Evacuate Teammate (SSN %d) at TT#%d"
TEAMMATE_EVACUATING = "A teammate is being evacuated"
TEAMMATE_EVACUATING_NOT = "A teammate is not being evacuated"
TEAMMATE_IS_DISABLED = "Teammates are off"
TEAMMATE_IS_ENABLED = "Teammates are On"
TEAMMATE_MEDIC = "Medic Assisting Teammate"
TEAMMATE_MEDIC_ASSIST = "Teleport Medic to TT#%d for teammate (SSN %d)"
TEAMMATE_MEDIC_ASSISTING = "A teammate is being assisted by a medic"
TEAMMATE_MEDIC_ASSISTING_NOT = "A teammate is not being assisted by a medic"
TEAMMATE_PRIMARY = "Primary Teammate"
TEAMMATE_SECONDARY = "Secondary Teammate"
TEAM_BLUE = "Team Blue"
TEAM_DEATHMATCH = "TEAM DEATHMATCH"
TEAM_GREEN = "Team Green"
TEAM_KING_OF_THE_HILL = "TEAM KING OF THE HILL"
TEAM_RED = "Team Red"
TELEPORT_TARGET_NUM = "Teleport target"
TERRAIN_OVERRIDES = "Mission Overrides"
TERRAIN_TYPE = "Terrain Type"
TEXT_FILE_FILTER_DES = "Text file (*.txt)"
TEXT_FILE_FILTER_EXT = "*.txt"
TEXT_ID = "Text ID"
TEXT_MESSAGE = "Display Text Message %i"
THEN_ACTIONS = "THEN ( Actions )"
TILER_FILTER_DES = "Tiler File (*.til)"
TILER_FILTER_EXT = "*.til"
TILE_SHOW = "Char Tiles"
TIME_SEC = "Time (seconds)"
TMATETOGGLE_OFF = "disable teammate command"
TMATETOGGLE_ON = "enable teammate command"
TOOLS_BLINK = "&Blink Group Stats"
TOOLS_TILER = "&Tile Floater"
TOO_MANY_AREA_TRIGGERS = "Cannot have more than %i area triggers"
TOO_MANY_DECOR = "The total number of Decorations and Buildings (%i) exceeds the maximum (%i)"
TOO_MANY_ITEMS = "The total number of Vehicles and Objects (%i) exceeds the maximum (%i)"
TOO_MANY_MARKERS = "The total number of Markers (%i) exceeds the maximum (%i)"
TOO_MANY_MITEMS = "The total number of  Vehicles (%d) exceeds the maximum (%d)"
TOO_MANY_OPLUSMITEMSNET = "The total number of People + Vehicles (%d) exceeds the maximum (%d) for net play"
TOO_MANY_ORGANICS = "The total number of People (%i) exceeds the maximum (%i)"
TOO_MANY_WAYPOINTS = "Cannot have more than %i waypoints in a group"
TO_GREEN_ALERT = " Green Alert"
TO_RED_ALERT = " Red Alert"
TO_YELLOW_ALERT = " Yellow Alert"
TRIGGER_CONDITION = "Trigger Condition"
TRIGGER_IF = "Trigger if:"
TRIGGER_TYPE = "Trigger Type"
TRIGGER_VARIABLES = "Trigger Variables"
TYPE_BUILDING = "Type: Building"
TYPE_DECORATION = "Type: Decoration"
TYPE_FOLIAGE = "Type: Foliage"
TYPE_MARKER = "Type: Marker"
TYPE_OBJECT = "Type: Object"
TYPE_PERSON = "Type: Person"
TYPE_POWERUP = "Type: Power-up"
TYPE_VEHICLE = "Type: Vehicle"
UAR_AUTO = "AR - Underwater Rifle, auto"
UAR_SEMI = "AR - Underwater Rifle, semi"
UMP_AUTO = "SMG - UMP, auto"
UMP_BURST = "SMG - UMP, burst"
UMP_SEMI = "SMG - UMP, semi"
UNKNOWN_ITEMS = "Unknown Items (%i)"
UNSELECT_ALL_BUTTON = "Unselect All"
VAPORIZE_GROUP = "Vaporize Group"
VAPORIZE_GROUP_NUM = "Vaporize Group %i"
VAPORIZE_SINGLE = "Vaporize SSN"
VAPORIZE_SINGLE_NUM = "Vaporize SSN %i"
VARIABLE_NUMBER_STRING = "Variable Number"
VARIABLE_STATUS = "Variable Status"
VELOCITY_KPH = "Velocity (kph)"
VIEW_3D = "3D Wireframe"
VIEW_BYLAYER = "View by &Layer"
VIEW_BYSIDE = "View by &Side"
VIEW_BYTYPE = "View by &Type"
VIEW_SELECTBLINK = "Select &Blink Group"
VISIBLE_CAMP_VARS = "Visible Campaign Variables"
VISIBLE_LAYERS = "Visible Layers"
WATER_LEVEL = "Water Level (x0.5 m)"
WAV_LIST_NUMBER = "Dialog ID"
WAYPOINT_BLUE = "Blue Team Waypoint"
WAYPOINT_LIST = "Waypoint List"
WAYPOINT_LIST_HEADER = ""// Waypoint List for %s, saved on %i/%i/%i, %i:%2i"
WAYPOINT_NOLOOP = "Waypoint does NOT loop"
WAYPOINT_NUMBER = "Waypoint Number"
WAYPOINT_RED = "Red Team Waypoint"
WEAPONS_ARMORY = "All Weapons Available in Armory"
WEAPONS_OFF = "All Weapons Off"
WEAPONS_ON = "All Weapons On"
WEAPON_ACCURACY1 = "Weapon Accuracy 1"
WEAPON_ACCURACY2 = "Weapon Accuracy 2"
WIN_CONDITION = "Win Conditions"
WPN_CAR15AUTO = "CAR15 - Auto"
WPN_CLAYMORE = "Claymore"
WPN_GRENADEFB = "Flash Bang"
WPN_GRENADEHE = "Frag Grenade"
WPN_GRENADESM = "Smoke Grenade"
WPN_KNIFE = "Knife"
WP_DIST = "WP Distance"
WP_EVENT_DELETED = "Waypoint %d-%d (SSN %d) referenced the event that was just deleted.  This waypoint's 'advancement trigger' reference will now be removed."
X_COORD = "X:"
YELLOW_ALERT = "Yellow Alert"
Y_COORD = "Y:"
Z_COORD = "Z:"
`,
};
