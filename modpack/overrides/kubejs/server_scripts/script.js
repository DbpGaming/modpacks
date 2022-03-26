// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here
  event.replaceInput({}, 'techreborn:electric_furnace', '#c:electric_furnace');
  event.replaceInput({}, 'techreborn:grinder', '#c:electric_crusher');
  event.replaceInput({}, 'techreborn:compressor', '#c:electric_compressor');
  
  event.replaceInput({}, 'modern_industrialization:steel_machine_casing', '#c:machine_frame_lv');
  event.replaceInput({}, 'indrev:machine_block', '#c:machine_frame_lv');
  event.replaceInput({}, 'techreborn:basic_machine_frame', '#c:machine_frame_lv');
  event.replaceInput({}, 'modern_industrialization:advanced_machine_casing', '#c:machine_frame_mv');
  event.replaceInput({}, 'techreborn:advanced_machine_frame', '#c:machine_frame_mv');
  event.replaceInput({}, 'modern_industrialization:turbo_machine_casing', '#c:machine_frame_hv');
  event.replaceInput({}, 'modern_industrialization:highly_advanced_machine_casing', '#c:machine_frame_ev');
  event.replaceInput({}, 'techreborn:industrial_machine_frame', '#c:machine_frame_ev');
  event.replaceInput({}, 'modern_industrialization:quantum_machine_casing', '#c:machine_frame_iv');
  
  event.replaceInput({}, 'indrev:circuit_mk1', '#c:circuit_t1');
  event.replaceInput({}, 'modern_industrialization:analog_circuit', '#c:circuit_t1');
  event.replaceInput({}, 'techreborn:electronic_circuit', '#c:circuit_t1');
  event.replaceInput({}, 'indrev:circuit_mk2', '#c:circuit_t2');
  event.replaceInput({}, 'modern_industrialization:electronic_circuit', '#c:circuit_t2');
  event.replaceInput({}, 'techreborn:advanced_circuit', '#c:circuit_t2');
  event.replaceInput({}, 'indrev:circuit_mk3', '#c:circuit_t3');
  event.replaceInput({}, 'modern_industrialization:digital_circuit', '#c:circuit_t3');
  event.replaceInput({}, 'techreborn:data_storage_chip', '#c:circuit_t3');
  event.replaceInput({}, 'indrev:circuit_mk4', '#c:circuit_t4');
  event.replaceInput({}, 'modern_industrialization:processing_unit', '#c:circuit_t4');
  event.replaceInput({}, 'techreborn:energy_flow_chip', '#c:circuit_t4');
  event.replaceInput({}, 'modern_industrialization:quantum_circuit', '#c:circuit_t5');
  
  event.replaceInput({}, 'modern_industrialization:superconductor_wire', '#c:wire/t5');
  event.replaceInput({}, 'techreborn:superconductor', '#c:wire/t5');
  
  event.replaceInput({}, 'modern_industrialization:copper_cable', '#c:cable/t1');
  event.replaceInput({}, 'techreborn:insulated_copper_cable', '#c:cable/t1');
  event.replaceInput({}, 'modern_industrialization:electrum_cable', '#c:cable/t2');
  event.replaceInput({}, 'techreborn:insulated_gold_cable', '#c:cable/t2');
  event.replaceInput({}, 'modern_industrialization:aluminum_cable', '#c:cable/t3');
  event.replaceInput({}, 'techreborn:insulated_hv_cable', '#c:cable/t3');
  event.replaceInput({}, 'techreborn:glassfiber_cable', '#c:cable/t4');
  event.replaceInput({}, 'techreborn:superconductor_cable', '#c:cable/t5');
  event.replaceInput({}, 'modern_industrialization:superconductor_cable', '#c:cable/t5');
  
  event.replaceInput({}, 'indrev:battery', '#c:battery_t1');
  event.replaceInput({}, 'techreborn:red_cell_battery', '#c:battery_t1');
  event.replaceInput({}, 'modern_industrialization:redstone_battery', '#c:battery_t1');
  event.replaceInput({}, 'techreborn:lithium_ion_battery', '#c:battery_t2');
  event.replaceInput({}, 'modern_industrialization:silicon_battery', '#c:battery_t2');
  event.replaceInput({}, 'techreborn:energy_crystal', '#c:battery_t3');
  event.replaceInput({}, 'modern_industrialization:sodium_battery', '#c:battery_t3');
  event.replaceInput({}, 'techreborn:lapotron_crystal', '#c:battery_t4');
  event.replaceInput({}, 'modern_industrialization:cadmium_battery', '#c:battery_t4');
  event.replaceInput({}, 'techreborn:lapotronic_orb', '#c:battery_t5');
  event.replaceInput({}, 'modern_industrialization:plutonium_battery', '#c:battery_t5');
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

onEvent('tags.items', event => {
  event.add('c:electric_furnace', 'indrev:electric_furnace_mk1')
  event.add('c:electric_furnace', 'techreborn:electric_furnace')
  event.add('c:electric_furnace', 'modern_industrialization:electric_furnace')
  event.add('c:electric_crusher', 'indrev:pulverizer_mk1')
  event.add('c:electric_crusher', 'techreborn:grinder')
  event.add('c:electric_crusher', 'modern_industrialization:electric_macerator')
  event.add('c:electric_compressor', 'indrev:compressor_mk1')
  event.add('c:electric_compressor', 'techreborn:compressor')
  event.add('c:electric_compressor', 'modern_industrialization:electric_compressor')
  
  event.add('c:machine_frame_ulv', 'modern_industrialization:bronze_machine_casing')
  event.add('c:machine_frame_lv', 'modern_industrialization:steel_machine_casing')
  event.add('c:machine_frame_mv', 'modern_industrialization:advanced_machine_casing')
  event.add('c:machine_frame_hv', 'modern_industrialization:turbo_machine_casing')
  event.add('c:machine_frame_ev', 'modern_industrialization:highly_advanced_machine_casing')
  event.add('c:machine_frame_iv', 'modern_industrialization:quantum_machine_casing')
  event.add('c:machine_frame_lv', 'indrev:machine_block')
  event.add('c:machine_frame_lv', 'techreborn:basic_machine_frame')
  event.add('c:machine_frame_mv', 'techreborn:advanced_machine_frame')
  event.add('c:machine_frame_ev', 'techreborn:industrial_machine_frame')
  
  event.add('c:circuit_t1', 'indrev:circuit_mk1')
  event.add('c:circuit_t1', 'modern_industrialization:analog_circuit')
  event.add('c:circuit_t1', 'techreborn:electronic_circuit')
  event.add('c:circuit_t2', 'indrev:circuit_mk2')
  event.add('c:circuit_t2', 'modern_industrialization:electronic_circuit')
  event.add('c:circuit_t2', 'techreborn:advanced_circuit')
  event.add('c:circuit_t3', 'indrev:circuit_mk3')
  event.add('c:circuit_t3', 'modern_industrialization:digital_circuit')
  event.add('c:circuit_t3', 'techreborn:data_storage_chip')
  event.add('c:circuit_t4', 'indrev:circuit_mk4')
  event.add('c:circuit_t4', 'modern_industrialization:processing_unit')
  event.add('c:circuit_t4', 'techreborn:energy_flow_chip')
  event.add('c:circuit_t5', 'modern_industrialization:quantum_circuit')
  
  event.add('c:wire/t5', 'modern_industrialization:superconductor_wire')
  event.add('c:wire/t5', 'techreborn:superconductor')
  
  event.add('c:battery_t1', 'indrev:battery')
  event.add('c:battery_t1', 'techreborn:red_cell_battery')
  event.add('c:battery_t1', 'modern_industrialization:redstone_battery')
  event.add('c:battery_t2', 'techreborn:lithium_ion_battery')
  event.add('c:battery_t2', 'modern_industrialization:silicon_battery')
  event.add('c:battery_t3', 'techreborn:energy_crystal')
  event.add('c:battery_t3', 'modern_industrialization:sodium_battery')
  event.add('c:battery_t4', 'techreborn:lapotron_crystal')
  event.add('c:battery_t4', 'modern_industrialization:cadmium_battery')
  event.add('c:battery_t5', 'techreborn:lapotronic_orb')
  event.add('c:battery_t5', 'modern_industrialization:plutonium_battery')
  
  event.add('c:cable/t1', 'modern_industrialization:copper_cable')
  event.add('c:cable/t1', 'techreborn:insulated_copper_cable')
  event.add('c:cable/t1', 'indrev:cable_mk1')
  event.add('c:cable/t2', 'modern_industrialization:electrum_cable')
  event.add('c:cable/t2', 'techreborn:insulated_gold_cable')
  event.add('c:cable/t2', 'indrev:cable_mk2')
  event.add('c:cable/t3', 'modern_industrialization:aluminum_cable')
  event.add('c:cable/t3', 'techreborn:insulated_hv_cable')
  event.add('c:cable/t3', 'indrev:cable_mk3')
  event.add('c:cable/t4', 'techreborn:glassfiber_cable')
  event.add('c:cable/t4', 'indrev:cable_mk4')
  event.add('c:cable/t5', 'techreborn:superconductor_cable')
  event.add('c:cable/t5', 'modern_industrialization:superconductor_cable')
})
