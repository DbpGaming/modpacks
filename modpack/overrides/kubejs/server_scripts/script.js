// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "  P  ",
	" BEB ",
    "GCRCG",
    " WSW ",
    "  J  "
  ],
  "key": {
    "P": {
      "item": "the_aether:golden_parachute"
    },
	"B": {
      "item": "minecraft:nether_star"
    },
	"E": {
      "item": "minecraft:elytra"
    },
	"G": {
      "item": "botania:gaia_ingot"
    },
	"C": {
      "item": "indrev:circuit_mk4"
    },
	"R": {
      "item": "kibe:diamond_ring"
    },
	"W": {
      "item": "bewitchment:dragons_blood_broom"
    },
	"S": {
      "item": "modern_industrialization:gravichestplate"
    },
	"J": {
      "item": "iron-jetpacks:netherite_jetpack"
    }
  },
  "result": {
    "item": "kibe:angel_ring",
    "count": 1
  },
  "acceptMirrored": true
  })

	event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "MG   ",
	"MGB  ",
    "MGBS ",
    "MGB  ",
    "MG   "
  ],
  "key": {
    "M": {
      "item": "modern_industrialization:large_advanced_motor"
    },
	"G": {
      "item": "modern_industrialization:titanium_gear"
    },
	"B": {
      "item": "create:gearbox"
    },
	"S": {
      "item": "create:andesite_encased_shaft"
    }
  },
  "result": {
    "item": "create:creative_motor",
    "count": 1
  },
  "acceptMirrored": true
  })

	event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    " ICI ",
	"IGOGI",
    "COMOC",
    "IGOGI",
    " ICI "
  ],
  "key": {
    "I": {
      "item": "modern_industrialization:iridium_block"
    },
	"C": {
      "item": "indrev:lazuli_flux_container_mk4"
    },
	"G": {
      "item": "botania:gaia_ingot"
    },
	"O": {
      "item": "techreborn:lapotronic_orb"
    },
	"M": {
      "item": "create:creative_motor"
    }
  },
  "result": {
    "item": "indrev:lazuli_flux_container_creative",
    "count": 1
  },
  "acceptMirrored": true
  })
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
