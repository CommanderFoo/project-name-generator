// Word banks organized by theme
const word_banks = {
    fantasy: {
        adjectives: [
            "Shadow", "Crystal", "Eternal", "Ancient", "Mystic", "Crimson", "Golden", "Silver", "Emerald", "Obsidian",
            "Arcane", "Divine", "Forgotten", "Hidden", "Sacred", "Frozen", "Burning", "Hollow", "Silent", "Cursed",
            "Shattered", "Twilight", "Fabled", "Enchanted", "Spectral", "Earthen", "Radiant", "Veilbound", "Runic", "Moonlit",
            "Sundered", "Woven", "Starborn", "Ghostly", "Timeless", "Wyrmtouched", "Blessed", "Fallen", "Dreaming", "Wandering",
            "Ashen", "Ironclad", "Stoneheart", "Whispered", "Veiled", "Hallowed", "Shimmering", "Tempest", "Luminous", "Darkened",
            "Primeval", "Wraithlike", "Enchanted", "Mythic", "Ethereal", "Eldritch", "Glimmering", "Thunderous", "Forgeborn", "Soulbound",
            "Verdant", "Sapphire", "Oaken", "Willowed", "Mirrored", "Dusklit", "Dawnbreak", "Starfall", "Stormbringer", "Everlasting"
        ],
        nouns: [
            "Dragon", "Kingdom", "Realm", "Throne", "Crown", "Blade", "Shield", "Fortress", "Oracle", "Phoenix",
            "Wizard", "Knight", "Quest", "Legend", "Rune", "Spell", "Dungeon", "Tower", "Forest", "Mountain",
            "Citadel", "Scepter", "Griffin", "Chimera", "Paladin", "Sorcerer", "Warlock", "Cleric", "Bard", "Ranger",
            "Archer", "Cavalier", "Templar", "Seraph", "Golem", "Wyrm", "Serpent", "Drake", "Hydra", "Basilisk",
            "Manticore", "Unicorn", "Pegasus", "Gargoyle", "Lich", "Wraith", "Specter", "Banshee", "Djinn", "Elemental",
            "Colossus", "Titan", "Champion", "Herald", "Sage", "Mystic", "Prophet", "Scholar", "Artifact", "Amulet",
            "Talisman", "Grimoire", "Staff", "Wand", "Crypt", "Sanctum", "Haven", "Bastion", "Keep", "Citadel"
        ],
        verbs: [
            "Rise", "Fall", "Awaken", "Forge", "Seek", "Conquer", "Defend", "Summon", "Banish", "Unleash",
            "Ignite", "Shatter", "Embrace", "Vanquish", "Ascend",
            "Enchant", "Bind", "Invoke", "Conjure", "Dispel", "Bless", "Curse", "Smite", "Restore", "Purify",
            "Corrupt", "Transform", "Awaken", "Resurrect", "Enthrall", "Vanish", "Materialize", "Transcend", "Manifest", "Bestow",
            "Imbue", "Consecrate", "Desecrate", "Shackle", "Liberate", "Empower", "Weaken", "Illuminate", "Obscure", "Reveal",
            "Conceal", "Protect", "Destroy", "Create", "Annihilate", "Chronicle", "Prophecy", "Wield", "Sacrifice", "Resurrect",
            "Inherit", "Abandon", "Claim", "Surrender", "Traverse", "Descend", "Emerge", "Vanquish", "Endure", "Reign"
        ],
        syllables: [
            "zar", "thar", "kin", "dor", "ael", "mor", "wyn", "val", "rix", "sol", "vor", "ith", "ax", "ul", "en",
            "thyr", "quor", "ghal", "zeth", "vyn", "keth", "rath", "ghul", "quelm", "thorn",
            "drak", "fyn", "lor", "myr", "neth", "orn", "phal", "quen", "ryn", "sar", "thal", "uth", "vel", "wyr", "xal",
            "yth", "zor", "bel", "carn", "del", "eth", "fal", "gorn", "helm", "ith", "jorn", "kal", "lorn", "moth", "nix",
            "oth", "pyr", "quil", "roth", "syl", "thel", "ulf", "vorn", "weth", "xor", "yorn", "zel", "aer", "brin", "cor",
            "dyn", "elv", "frey", "grim", "hel"
        ]
    },
    scifi: {
        adjectives: [
            "Cyber", "Quantum", "Stellar", "Neon", "Digital", "Cosmic", "Void", "Chrome", "Neural", "Hyper",
            "Plasma", "Zero", "Dark", "Binary", "Infinite", "Synthetic", "Virtual", "Orbital", "Atomic", "Parallel",
            "Galactic", "Subspace", "Warp", "Fusion", "Ionic", "Magnetic", "Photon", "Particle", "Kinetic", "Radiant",
            "Holographic", "Bionic", "Cybernetic", "Transwarp", "Sublight", "Superluminal", "Interstellar", "Intergalactic", "Extrasolar", "Posthuman",
            "Nanoscale", "Macrocosmic", "Temporal", "Dimensional", "Singularity", "Relativistic", "Exotic", "Antimatter", "Hyperspace", "Tesseract",
            "Grav", "Cryo", "Thermo", "Electro", "Magneto", "Astro", "Xeno", "Exo", "Endo", "Proto",
            "Meta", "Ultra", "Mega", "Giga", "Tera", "Peta", "Exa", "Zetta", "Spectral", "Prismatic"
        ],
        nouns: [
            "Protocol", "Matrix", "Nexus", "Core", "System", "Grid", "Pulse", "Wave", "Node", "Flux",
            "Sector", "Station", "Colony", "Engine", "Drive", "Horizon", "Network", "Signal", "Vector", "Circuit",
            "Beacon", "Array", "Conduit", "Relay", "Terminus", "Gateway", "Portal", "Rift", "Anomaly", "Singularity",
            "Nebula", "Quasar", "Pulsar", "Vortex", "Helix", "Spire", "Citadel", "Outpost", "Frontier", "Bastion",
            "Armada", "Fleet", "Vessel", "Cruiser", "Frigate", "Destroyer", "Carrier", "Shuttle", "Probe", "Satellite",
            "Construct", "Artifact", "Device", "Module", "Component", "Interface", "Processor", "Memory", "Database", "Archive",
            "Algorithm", "Subroutine", "Protocol", "Firewall", "Encryption", "Cypher", "Codec", "Transmitter", "Receiver", "Antenna"
        ],
        verbs: [
            "Override", "Breach", "Sync", "Launch", "Decode", "Transmit", "Initialize", "Reboot", "Hack", "Upload",
            "Terraform", "Warp", "Calibrate", "Amplify", "Disrupt",
            "Download", "Execute", "Compile", "Deploy", "Activate", "Deactivate", "Modify", "Configure", "Analyze", "Scan",
            "Probe", "Map", "Navigate", "Pilot", "Dock", "Undock", "Engage", "Disengage", "Target", "Lock",
            "Fire", "Charge", "Discharge", "Shield", "Deflect", "Absorb", "Reflect", "Process", "Compute", "Calculate",
            "Simulate", "Model", "Predict", "Forecast", "Monitor", "Track", "Trace", "Locate", "Identify", "Classify",
            "Encrypt", "Decrypt", "Compress", "Decompress", "Fragment", "Reassemble", "Teleport", "Materialize", "Dematerialize", "Phase"
        ],
        syllables: [
            "tron", "nex", "zon", "tek", "sys", "vex", "ion", "ax", "core", "net", "bit", "hex", "ray", "mod", "sync",
            "plex", "nova", "flux", "kron", "zeph", "quant", "theta", "omni", "xen", "phos",
            "byte", "data", "giga", "mega", "nano", "pico", "tera", "zeta", "alpha", "beta", "gamma", "delta", "sigma", "omega", "prime",
            "zero", "one", "dex", "lex", "max", "rax", "sax", "vax", "wax", "zax", "arc", "arc", "beam", "bolt", "cell",
            "chip", "code", "deck", "disc", "dock", "dyne", "edge", "field", "gate", "grid", "hub", "jack", "key", "link", "node",
            "pod", "port", "scan", "wave", "warp"
        ]
    },
    modern: {
        adjectives: [
            "Urban", "Prime", "Elite", "Swift", "Bold", "Fresh", "Sharp", "Clear", "Bright", "Pure",
            "Smart", "Quick", "Sleek", "Clean", "Dynamic", "Active", "Rapid", "Vital", "Peak", "Edge",
            "Agile", "Lean", "Focused", "Driven", "Streamlined", "Polished", "Refined", "Curated", "Crafted", "Designed",
            "Minimal", "Maximal", "Optimal", "Essential", "Core", "Central", "Key", "Main", "Primary", "Leading",
            "Next", "New", "Open", "Free", "True", "Real", "Direct", "Instant", "Live", "Ready",
            "Global", "Local", "Metro", "Civic", "Social", "Digital", "Mobile", "Cloud", "Web", "App",
            "Pro", "Plus", "Max", "Ultra", "Super", "Hyper", "Mega", "Giga", "Mono", "Multi"
        ],
        nouns: [
            "Studio", "Labs", "Works", "Hub", "Space", "Zone", "Base", "Point", "Flow", "Line",
            "Craft", "Shift", "Spark", "Dash", "Boost", "Link", "Path", "Track", "Blend", "Scope",
            "Stack", "Grid", "Nest", "Hive", "Pulse", "Wave", "Beam", "Core", "Edge", "Node",
            "Loop", "Cycle", "Phase", "Stage", "Step", "Move", "Jump", "Leap", "Rise", "Climb",
            "Peak", "Summit", "Apex", "Zenith", "Vertex", "Vector", "Axis", "Pivot", "Center", "Focus",
            "Forge", "Mill", "Mint", "Shop", "Yard", "Den", "Loft", "Dock", "Port", "Gate",
            "Bridge", "Channel", "Route", "Lane", "Street", "Avenue", "Plaza", "Square", "Park", "Campus"
        ],
        verbs: [
            "Build", "Create", "Launch", "Design", "Develop", "Innovate", "Transform", "Connect", "Grow", "Scale",
            "Ignite", "Elevate", "Pivot", "Disrupt", "Accelerate",
            "Activate", "Amplify", "Boost", "Catalyze", "Charge", "Cultivate", "Deliver", "Drive", "Enable", "Energize",
            "Engage", "Engineer", "Enhance", "Execute", "Expand", "Fuel", "Generate", "Harness", "Implement", "Integrate",
            "Iterate", "Leverage", "Mobilize", "Optimize", "Orchestrate", "Pioneer", "Power", "Propel", "Refine", "Reinvent",
            "Shape", "Spark", "Streamline", "Strengthen", "Surge", "Sync", "Synthesize", "Target", "Track", "Trigger",
            "Unify", "Unlock", "Upgrade", "Venture", "Visualize", "Rally", "Revamp", "Rethink", "Reform", "Reboot"
        ],
        syllables: [
            "ly", "fy", "io", "co", "go", "up", "on", "it", "er", "en", "ix", "ex", "ox", "az", "ez",
            "ink", "apt", "akt", "ops", "evo", "zap", "lix", "ura", "ven", "tek",
            "box", "biz", "cast", "dash", "dex", "dot", "flow", "fox", "gig", "got", "jet", "jot", "hub", "hype", "key",
            "kit", "lab", "lap", "led", "let", "lift", "lit", "lux", "max", "mix", "net", "nex", "now", "pad", "pak",
            "pix", "pod", "pop", "pro", "que", "rad", "ray", "rez", "run", "set", "shift", "shot", "snap", "sol", "spot",
            "star", "sync", "tap", "top", "vibe"
        ]
    },
    abstract: {
        adjectives: [
            "Lucid", "Vivid", "Subtle", "Fluid", "Primal", "Serene", "Chaos", "Zen", "Nimbus", "Aura",
            "Echo", "Haze", "Drift", "Glow", "Shade", "Spectrum", "Vertex", "Apex", "Nebula", "Nova",
            "Liminal", "Ephemeral", "Transient", "Fleeting", "Perpetual", "Infinite", "Boundless", "Formless", "Shapeless", "Amorphous",
            "Crystalline", "Organic", "Geometric", "Fractal", "Spiral", "Radial", "Linear", "Angular", "Curved", "Twisted",
            "Layered", "Woven", "Tangled", "Knotted", "Smooth", "Rough", "Textured", "Patterned", "Random", "Ordered",
            "Harmonic", "Dissonant", "Resonant", "Vibrant", "Muted", "Saturated", "Faded", "Bright", "Dim", "Luminous",
            "Opaque", "Translucent", "Transparent", "Reflective", "Refractive", "Diffuse", "Focused", "Scattered", "Unified", "Fragmented"
        ],
        nouns: [
            "Essence", "Form", "Motion", "Rhythm", "Pattern", "Layer", "Sphere", "Fragment", "Notion", "Concept",
            "Vision", "Dream", "Mind", "Soul", "Spirit", "Void", "Ether", "Flux", "Flow", "Shift",
            "Geometry", "Topology", "Symmetry", "Asymmetry", "Balance", "Tension", "Release", "Impulse", "Wave", "Particle",
            "Field", "Force", "Energy", "Matter", "Space", "Time", "Dimension", "Plane", "Surface", "Volume",
            "Point", "Line", "Curve", "Arc", "Circle", "Triangle", "Square", "Polygon", "Prism", "Cube",
            "Cone", "Pyramid", "Cylinder", "Torus", "Helix", "Spiral", "Vortex", "Nexus", "Node", "Hub",
            "Path", "Journey", "Quest", "Search", "Discovery", "Revelation", "Insight", "Wisdom", "Truth", "Mystery"
        ],
        verbs: [
            "Morph", "Emerge", "Evolve", "Drift", "Pulse", "Fade", "Bloom", "Spiral", "Weave", "Transcend",
            "Ignite", "Shift", "Elevate", "Radiate", "Converge",
            "Oscillate", "Vibrate", "Resonate", "Harmonize", "Synchronize", "Flow", "Stream", "Cascade", "Ripple", "Undulate",
            "Expand", "Contract", "Inflate", "Deflate", "Compress", "Stretch", "Bend", "Twist", "Fold", "Unfold",
            "Split", "Merge", "Divide", "Unite", "Scatter", "Gather", "Disperse", "Concentrate", "Diffuse", "Focus",
            "Reflect", "Refract", "Absorb", "Emit", "Project", "Transmit", "Transform", "Translate", "Rotate", "Revolve",
            "Orbit", "Spin", "Swirl", "Whirl", "Dance", "Float", "Hover", "Suspend", "Balance", "Align"
        ],
        syllables: [
            "um", "ix", "os", "ax", "en", "al", "ia", "io", "eo", "ae", "or", "ur", "ir", "ar", "yr",
            "eth", "quo", "pha", "zir", "vae", "nyx", "tho", "lux", "qua", "vel",
            "aer", "ais", "alo", "amb", "ana", "ant", "aph", "aqu", "arc", "ast", "ath", "axi", "bel", "bin", "bor",
            "cal", "cel", "cer", "chi", "cir", "cor", "cos", "cre", "cry", "del", "dia", "dim", "dyn", "ech", "ele",
            "epi", "equ", "ess", "flu", "for", "fra", "geo", "glo", "gra", "har", "hel", "hex", "hol", "hyp", "ide",
            "inf", "int", "lam", "lum", "mat"
        ]
    },
    horror: {
        adjectives: [
            "Dread", "Hollow", "Cursed", "Wicked", "Grim", "Sinister", "Haunted", "Twisted", "Blood", "Dark",
            "Pale", "Silent", "Creeping", "Rotting", "Ghostly", "Undying", "Forsaken", "Vile", "Macabre", "Eldritch",
            "Abyssal", "Malevolent", "Ominous", "Foreboding", "Dreadful", "Terrifying", "Horrific", "Gruesome", "Ghastly", "Monstrous",
            "Demonic", "Infernal", "Hellish", "Nightmarish", "Unspeakable", "Unnameable", "Unknowable", "Unfathomable", "Unholy", "Profane",
            "Blasphemous", "Sacrilegious", "Forbidden", "Accursed", "Damned", "Doomed", "Blighted", "Pestilent", "Putrid", "Fetid",
            "Necrotic", "Cadaverous", "Skeletal", "Gaunt", "Emaciated", "Withered", "Decrepit", "Ancient", "Primordial", "Antediluvian",
            "Sepulchral", "Funereal", "Morbid", "Deathly", "Spectral", "Ethereal", "Incorporeal", "Intangible", "Shadowy", "Tenebrous"
        ],
        nouns: [
            "Specter", "Crypt", "Nightmare", "Abyss", "Wraith", "Tomb", "Shadow", "Demon", "Horror", "Grave",
            "Asylum", "Plague", "Flesh", "Bone", "Scream", "Terror", "Phantom", "Corpse", "Ritual", "Whisper",
            "Revenant", "Ghoul", "Vampire", "Werewolf", "Zombie", "Skeleton", "Mummy", "Lich", "Banshee", "Poltergeist",
            "Apparition", "Entity", "Presence", "Manifestation", "Aberration", "Abomination", "Monstrosity", "Creature", "Beast", "Fiend",
            "Hellspawn", "Demonspawn", "Imp", "Succubus", "Incubus", "Cultist", "Necromancer", "Witch", "Warlock", "Sorcerer",
            "Coven", "Cult", "Sect", "Order", "Brotherhood", "Catacomb", "Mausoleum", "Ossuary", "Charnel", "Morgue",
            "Asylum", "Sanitarium", "Dungeon", "Oubliette", "Chamber", "Vault", "Cellar", "Attic", "Mansion", "Manor"
        ],
        verbs: [
            "Lurk", "Haunt", "Consume", "Devour", "Corrupt", "Torment", "Possess", "Decay", "Wither", "Shriek",
            "Crawl", "Fester", "Invoke", "Defile", "Unearth",
            "Stalk", "Hunt", "Prey", "Ambush", "Strike", "Maim", "Mutilate", "Dismember", "Eviscerate", "Exsanguinate",
            "Drain", "Siphon", "Leech", "Parasite", "Infect", "Contaminate", "Spread", "Multiply", "Swarm", "Overwhelm",
            "Suffocate", "Strangle", "Choke", "Drown", "Bury", "Entomb", "Imprison", "Trap", "Ensnare", "Bind",
            "Curse", "Hex", "Jinx", "Blight", "Plague", "Afflict", "Torment", "Agonize", "Terrorize", "Horrify",
            "Petrify", "Paralyze", "Freeze", "Shatter", "Rend", "Tear", "Rip", "Claw", "Scratch", "Bite"
        ],
        syllables: [
            "mor", "gul", "zul", "rath", "grim", "bane", "drek", "vor", "nex", "mol", "gor", "vex", "rot", "fel", "carn",
            "ghast", "thul", "qual", "wreth", "skorn", "blight", "thrax", "ghoul", "quell", "venth",
            "ash", "bel", "craw", "deth", "doom", "drak", "fang", "fear", "gore", "grav", "hex", "howl", "husk", "mal", "murk",
            "neth", "noch", "omen", "pall", "phan", "pyre", "reek", "ruin", "scab", "scar", "shade", "shroud", "skull", "slime", "soul",
            "spawn", "spite", "tomb", "tox", "void", "wail", "warp", "woe", "worm", "wound", "wrack", "wrath", "wyrm", "yawl", "zomb",
            "crypt", "dark", "dead", "dread", "night"
        ]
    },
    nature: {
        adjectives: [
            "Wild", "Ancient", "Verdant", "Primal", "Serene", "Rushing", "Mystic", "Eternal", "Golden", "Whispering",
            "Towering", "Blooming", "Frozen", "Radiant", "Twilight", "Autumn", "Spring", "Azure", "Emerald", "Coral",
            "Lush", "Dense", "Sparse", "Overgrown", "Untamed", "Savage", "Gentle", "Peaceful", "Tranquil", "Calm",
            "Stormy", "Tempestuous", "Raging", "Churning", "Rolling", "Crashing", "Flowing", "Trickling", "Bubbling", "Gurgling",
            "Rustling", "Swaying", "Dancing", "Drifting", "Floating", "Soaring", "Diving", "Plunging", "Rising", "Falling",
            "Blossoming", "Budding", "Sprouting", "Growing", "Thriving", "Flourishing", "Withering", "Decaying", "Rotting", "Decomposing",
            "Crystalline", "Glacial", "Alpine", "Tropical", "Arid", "Humid", "Misty", "Foggy", "Hazy", "Clouded"
        ],
        nouns: [
            "Forest", "Mountain", "River", "Storm", "Meadow", "Valley", "Ocean", "Canyon", "Grove", "Peak",
            "Lake", "Cliff", "Tide", "Bloom", "Root", "Branch", "Stone", "Sky", "Dawn", "Dusk",
            "Jungle", "Rainforest", "Savanna", "Prairie", "Steppe", "Tundra", "Desert", "Oasis", "Swamp", "Marsh",
            "Wetland", "Estuary", "Delta", "Bay", "Cove", "Peninsula", "Island", "Archipelago", "Reef", "Atoll",
            "Cascade", "Waterfall", "Rapids", "Spring", "Stream", "Brook", "Creek", "Pond", "Pool", "Lagoon",
            "Glacier", "Iceberg", "Snowfield", "Avalanche", "Volcano", "Geyser", "Hotspring", "Cavern", "Grotto", "Cave",
            "Boulder", "Pebble", "Sand", "Dune", "Plateau", "Mesa", "Butte", "Ridge", "Summit", "Crest"
        ],
        verbs: [
            "Grow", "Flow", "Bloom", "Rise", "Roam", "Drift", "Soar", "Cascade", "Awaken", "Thrive",
            "Flourish", "Wander", "Nestle", "Surge", "Unfurl",
            "Germinate", "Sprout", "Bud", "Blossom", "Pollinate", "Seed", "Root", "Branch", "Leaf", "Shed",
            "Migrate", "Hibernate", "Forage", "Graze", "Hunt", "Prey", "Stalk", "Pounce", "Flee", "Hide",
            "Burrow", "Nest", "Perch", "Fly", "Glide", "Dive", "Swim", "Wade", "Splash", "Ripple",
            "Erode", "Weather", "Carve", "Shape", "Mold", "Deposit", "Sediment", "Fossilize", "Crystallize", "Mineralize",
            "Evaporate", "Condense", "Precipitate", "Rain", "Snow", "Freeze", "Melt", "Thaw", "Flood", "Drought"
        ],
        syllables: [
            "oak", "fern", "moss", "brook", "vale", "glade", "pine", "leaf", "rill", "crest", "bough", "dell", "thorn", "mist", "shade",
            "quill", "thyme", "ghen", "briar", "aspen", "quarry", "thicket", "glen", "fen", "heath",
            "ash", "bark", "bay", "birch", "bloom", "brine", "bush", "cave", "cedar", "clay", "cloud", "coast", "coral", "creek", "dale",
            "dew", "drift", "dune", "elm", "fall", "field", "fire", "flora", "fog", "frost", "gust", "haze", "hill", "ice", "ivy",
            "kelp", "lake", "loch", "marsh", "meadow", "moon", "mud", "palm", "peat", "pond", "rain", "reef", "rock", "sand", "sea",
            "snow", "spring", "star", "stone", "storm"
        ]
    },
    steampunk: {
        adjectives: [
            "Brass", "Copper", "Steam", "Clockwork", "Victorian", "Gilded", "Iron", "Cogwheel", "Airship", "Vintage",
            "Industrial", "Mechanical", "Ornate", "Polished", "Riveted", "Gaslight", "Gear", "Piston", "Whistling", "Chimney",
            "Pneumatic", "Hydraulic", "Electric", "Magnetic", "Kinetic", "Thermal", "Pressurized", "Combustion", "Reciprocating", "Oscillating",
            "Rotating", "Spinning", "Whirring", "Clanking", "Hissing", "Steaming", "Smoking", "Sparking", "Crackling", "Humming",
            "Ticking", "Clicking", "Clacking", "Ratcheting", "Grinding", "Pumping", "Driving", "Propelling", "Launching", "Flying",
            "Floating", "Hovering", "Diving", "Submerging", "Burrowing", "Drilling", "Mining", "Forging", "Casting", "Molding",
            "Welding", "Riveting", "Bolting", "Screwing", "Winding", "Cranking", "Lever", "Pulley", "Chain", "Belt"
        ],
        nouns: [
            "Engine", "Contraption", "Automaton", "Dirigible", "Locomotive", "Workshop", "Foundry", "Apparatus", "Mechanism", "Gadget",
            "Boiler", "Turbine", "Valve", "Gauge", "Telegraph", "Factory", "Zeppelin", "Cog", "Gear", "Wrench",
            "Piston", "Cylinder", "Crankshaft", "Flywheel", "Governor", "Regulator", "Condenser", "Furnace", "Firebox", "Smokebox",
            "Chimney", "Funnel", "Whistle", "Bell", "Lever", "Throttle", "Brake", "Clutch", "Gearbox", "Transmission",
            "Differential", "Axle", "Wheel", "Rail", "Track", "Bridge", "Tunnel", "Viaduct", "Aqueduct", "Pipeline",
            "Submarine", "Bathysphere", "Ornithopter", "Gyrocopter", "Velocipede", "Monocycle", "Tricycle", "Quadricycle", "Steamroller", "Tractor",
            "Crane", "Derrick", "Winch", "Hoist", "Elevator", "Escalator", "Conveyor", "Dumbwaiter", "Phonograph", "Kinetoscope"
        ],
        verbs: [
            "Invent", "Tinker", "Forge", "Construct", "Engineer", "Power", "Propel", "Calibrate", "Assemble", "Operate",
            "Machinate", "Retrofit", "Fabricate", "Pressurize", "Ignite",
            "Design", "Blueprint", "Draft", "Sketch", "Model", "Prototype", "Patent", "Manufacture", "Mass-produce", "Automate",
            "Mechanize", "Industrialize", "Revolutionize", "Modernize", "Upgrade", "Enhance", "Improve", "Perfect", "Refine", "Polish",
            "Oil", "Lubricate", "Grease", "Maintain", "Repair", "Fix", "Restore", "Overhaul", "Rebuild", "Recondition",
            "Test", "Trial", "Experiment", "Demonstrate", "Exhibit", "Display", "Showcase", "Launch", "Debut", "Premiere",
            "Steam", "Chug", "Puff", "Whistle", "Clank", "Whir", "Hum", "Buzz", "Crackle", "Spark"
        ],
        syllables: [
            "gear", "cog", "steam", "brass", "iron", "bolt", "rivet", "pipe", "valve", "spring", "clock", "work", "smith", "forge", "weld",
            "throt", "quartz", "ghast", "piston", "flange", "grith", "quilter", "thorn", "wrought", "axle",
            "arc", "beam", "belt", "blade", "boil", "bore", "cam", "cast", "chain", "coil", "crank", "cylin", "drive", "drill", "dyne",
            "furn", "fuse", "gauge", "glow", "grind", "hammer", "hinge", "hiss", "hoist", "hub", "lever", "mech", "mill", "motor", "nozzle",
            "oil", "pneu", "press", "pump", "rail", "ring", "rod", "rust", "shaft", "spark", "spoke", "spool", "tank", "tin", "torch",
            "tube", "turn", "vent", "volt", "wheel"
        ]
    },
    cyberpunk: {
        adjectives: [
            "Neon", "Chrome", "Glitch", "Hacked", "Rogue", "Synthetic", "Underground", "Wired", "Razor", "Black",
            "Ghost", "Viral", "Lethal", "Street", "Data", "Static", "Burnt", "Electric", "Toxic", "Corrupt",
            "Augmented", "Enhanced", "Modified", "Boosted", "Overclocked", "Jacked", "Plugged", "Connected", "Networked", "Online",
            "Offline", "Encrypted", "Decoded", "Cracked", "Broken", "Fragmented", "Scattered", "Distributed", "Parallel", "Recursive",
            "Neural", "Synaptic", "Cortical", "Cerebral", "Cognitive", "Sentient", "Conscious", "Aware", "Intelligent", "Autonomous",
            "Robotic", "Mechanical", "Bionic", "Cybernetic", "Prosthetic", "Implanted", "Grafted", "Spliced", "Merged", "Fused",
            "Dark", "Shadow", "Hidden", "Secret", "Covert", "Stealth", "Silent", "Invisible", "Phantom", "Spectre"
        ],
        nouns: [
            "Runner", "Blade", "Chrome", "Wire", "Synth", "Hacker", "Street", "Grid", "Code", "Nerve",
            "Edge", "Ghost", "Drone", "Implant", "Rig", "Deck", "Sprawl", "Megacity", "Corp", "Fixer",
            "Netrunner", "Decker", "Console", "Interface", "Terminal", "Server", "Mainframe", "Database", "Archive", "Repository",
            "Algorithm", "Protocol", "Firewall", "Encryption", "Cipher", "Key", "Token", "Credential", "Access", "Permission",
            "Node", "Hub", "Router", "Switch", "Gateway", "Portal", "Tunnel", "Bridge", "Link", "Connection",
            "Chip", "Module", "Component", "Circuit", "Board", "Processor", "Memory", "Storage", "Drive", "Cache",
            "Cyborg", "Android", "Replicant", "Clone", "Avatar", "Persona", "Identity", "Alias", "Handle", "Tag"
        ],
        verbs: [
            "Jack", "Hack", "Splice", "Wire", "Boost", "Override", "Crash", "Burn", "Run", "Slice",
            "Breach", "Flatline", "Upload", "Extract", "Infiltrate",
            "Download", "Stream", "Buffer", "Cache", "Compress", "Decompress", "Encrypt", "Decrypt", "Encode", "Decode",
            "Parse", "Compile", "Execute", "Debug", "Patch", "Update", "Upgrade", "Downgrade", "Install", "Uninstall",
            "Connect", "Disconnect", "Link", "Unlink", "Sync", "Desync", "Mirror", "Clone", "Fork", "Merge",
            "Push", "Pull", "Commit", "Deploy", "Rollback", "Revert", "Backup", "Restore", "Wipe", "Format",
            "Scan", "Probe", "Map", "Trace", "Track", "Hunt", "Target", "Lock", "Engage", "Terminate"
        ],
        syllables: [
            "tek", "ware", "jack", "net", "bio", "syn", "grid", "hex", "bit", "core", "mod", "chip", "wire", "hack", "glitch",
            "thra", "quex", "ghrim", "zolt", "vrek", "skyn", "threx", "phreak", "krypt", "nexor",
            "arc", "byte", "code", "data", "deck", "dex", "dox", "drive", "edge", "file", "flux", "freq", "fuse", "gig", "hub",
            "ice", "jack", "key", "link", "lock", "log", "loop", "max", "mem", "mesh", "nex", "node", "patch", "ping", "pixel",
            "plug", "pod", "port", "proc", "pulse", "ram", "ray", "rez", "rom", "root", "run", "scan", "sec", "sig", "slot",
            "spam", "spike", "stack", "stream", "surge"
        ]
    }
};

// Combine all themes for "All" option
function get_combined_bank() {
    const combined = {
        adjectives: [],
        nouns: [],
        verbs: [],
        syllables: []
    };

    for (const theme in word_banks) {
        combined.adjectives.push(...word_banks[theme].adjectives);
        combined.nouns.push(...word_banks[theme].nouns);
        combined.verbs.push(...word_banks[theme].verbs);
        combined.syllables.push(...word_banks[theme].syllables);
    }

    // Remove duplicates
    combined.adjectives = [...new Set(combined.adjectives)];
    combined.nouns = [...new Set(combined.nouns)];
    combined.verbs = [...new Set(combined.verbs)];
    combined.syllables = [...new Set(combined.syllables)];

    return combined;
}

// Template patterns for name generation
const templates = {
    short: [
        (bank) => bank.adjectives[random_index(bank.adjectives)],
        (bank) => bank.nouns[random_index(bank.nouns)],
        (bank) => mashup_syllables(bank.syllables, 2)
    ],
    medium: [
        (bank) => bank.adjectives[random_index(bank.adjectives)] + " " + bank.nouns[random_index(bank.nouns)],
        (bank) => bank.verbs[random_index(bank.verbs)] + " " + bank.nouns[random_index(bank.nouns)],
        (bank) => mashup_syllables(bank.syllables, 3)
    ],
    long: [
        (bank) => bank.adjectives[random_index(bank.adjectives)] + " " + bank.nouns[random_index(bank.nouns)] + " " + bank.verbs[random_index(bank.verbs)],
        (bank) => "The " + bank.adjectives[random_index(bank.adjectives)] + " " + bank.nouns[random_index(bank.nouns)],
        (bank) => bank.nouns[random_index(bank.nouns)] + " of " + bank.adjectives[random_index(bank.adjectives)] + " " + bank.nouns[random_index(bank.nouns)],
        (bank) => mashup_syllables(bank.syllables, 4)
    ]
};

// State management
let current_name = "";
let favorites = [];
let session_names = new Set();

// DOM Elements
let theme_select;
let length_select;
let bulk_count;
let generate_btn;
let generate_btn_text;
let name_display;
let copy_btn;
let save_btn;
let copy_tooltip;
let favorites_list;
let clear_favs_btn;
let theme_toggle;
let stats_display;

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    init_elements();
    load_preferences();
    load_favorites();
    attach_event_listeners();
    update_stats();
    update_generate_btn_text();
});

function init_elements() {
    theme_select = document.getElementById("theme_select");
    length_select = document.getElementById("length_select");
    bulk_count = document.getElementById("bulk_count");
    generate_btn = document.getElementById("generate_btn");
    generate_btn_text = document.getElementById("generate_btn_text");
    name_display = document.getElementById("name_display");
    copy_btn = document.getElementById("copy_btn");
    save_btn = document.getElementById("save_btn");
    copy_tooltip = document.getElementById("copy_tooltip");
    favorites_list = document.getElementById("favorites_list");
    clear_favs_btn = document.getElementById("clear_favs_btn");
    theme_toggle = document.getElementById("theme_toggle");
    stats_display = document.getElementById("stats_display");
}

function attach_event_listeners() {
    generate_btn.addEventListener("click", generate_name);
    copy_btn.addEventListener("click", copy_name_to_clipboard);
    save_btn.addEventListener("click", save_name_to_favorites);
    clear_favs_btn.addEventListener("click", clear_all_favorites);
    theme_toggle.addEventListener("click", toggle_theme);

    // Save preferences on change
    theme_select.addEventListener("change", function () {
        save_preferences();
        update_stats();
    });
    length_select.addEventListener("change", save_preferences);

    bulk_count.addEventListener("input", function () {
        // Enforce min/max
        if (this.value < 1) this.value = 1;
        if (this.value > 50) this.value = 50;
        update_generate_btn_text();
        save_preferences();
    });
}

function update_generate_btn_text() {
    const count = parseInt(bulk_count.value) || 1;
    if (count > 1) {
        generate_btn_text.textContent = "Generate " + count + " Names";
    } else {
        generate_btn_text.textContent = "Generate Name";
    }
}

// Calculate possible combinations (realistic patterns only)
function calculate_combinations(bank) {
    const adj = bank.adjectives.length;
    const noun = bank.nouns.length;
    const verb = bank.verbs.length;
    const syl = bank.syllables.length;

    // Realistic patterns only:
    // 1. Adjective + Noun
    const adj_noun = adj * noun;

    // 2. Verb + Noun
    const verb_noun = verb * noun;

    // 3. 2-syllable mashup
    const syl_2 = syl * syl;

    // 4. 3-syllable mashup
    const syl_3 = syl * syl * syl;

    const total = adj_noun + verb_noun + syl_2 + syl_3;

    return {
        adj_noun: adj_noun,
        verb_noun: verb_noun,
        syl_2: syl_2,
        syl_3: syl_3,
        total: total,
        words: { adj, noun, verb, syl }
    };
}

function format_number(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + "B";
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
    }
    return num.toLocaleString();
}

function update_stats() {
    if (!stats_display) {
        return;
    }

    const theme = theme_select.value;
    const bank = (theme === "all") ? get_combined_bank() : word_banks[theme];
    const combos = calculate_combinations(bank);
    const theme_name = theme === "all" ? "All Themes" : theme.charAt(0).toUpperCase() + theme.slice(1);
    const is_expanded = stats_display.classList.contains("expanded");

    stats_display.innerHTML =
        "<div class=\"stats_header\" id=\"stats_toggle\">" +
        "<div class=\"stats_summary\">" +
        "<span class=\"stats_theme\">" + theme_name + "</span>" +
        "<span class=\"stats_total_inline\">" + format_number(combos.total) + " unique names</span>" +
        "</div>" +
        "<button class=\"stats_expand_btn\" aria-label=\"Toggle details\">" +
        "<svg class=\"expand_icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">" +
        "<polyline points=\"6 9 12 15 18 9\"></polyline>" +
        "</svg>" +
        "</button>" +
        "</div>" +
        "<div class=\"stats_details\">" +
        "<div class=\"stats_row\">" +
        "<span class=\"stats_label\">Words:</span>" +
        "<span class=\"stats_value\">" + combos.words.adj + " adj · " + combos.words.noun + " nouns · " + combos.words.verb + " verbs · " + combos.words.syl + " syl</span>" +
        "</div>" +
        "<div class=\"stats_row\">" +
        "<span class=\"stats_label\">Adj + Noun:</span>" +
        "<span class=\"stats_value\">" + format_number(combos.adj_noun) + "</span>" +
        "</div>" +
        "<div class=\"stats_row\">" +
        "<span class=\"stats_label\">Verb + Noun:</span>" +
        "<span class=\"stats_value\">" + format_number(combos.verb_noun) + "</span>" +
        "</div>" +
        "<div class=\"stats_row\">" +
        "<span class=\"stats_label\">2-Syl Mashup:</span>" +
        "<span class=\"stats_value\">" + format_number(combos.syl_2) + "</span>" +
        "</div>" +
        "<div class=\"stats_row\">" +
        "<span class=\"stats_label\">3-Syl Mashup:</span>" +
        "<span class=\"stats_value\">" + format_number(combos.syl_3) + "</span>" +
        "</div>" +
        "</div>";

    // Restore expanded state
    if (is_expanded) {
        stats_display.classList.add("expanded");
    }

    // Attach toggle listener
    const toggle = document.getElementById("stats_toggle");
    if (toggle) {
        toggle.addEventListener("click", function () {
            stats_display.classList.toggle("expanded");
        });
    }
}

// Utility functions
function random_index(arr) {
    return Math.floor(Math.random() * arr.length);
}

function mashup_syllables(syllables, count) {
    let result = "";
    for (let i = 0; i < count; i++) {
        result += syllables[random_index(syllables)];
    }
    // Capitalize first letter
    return result.charAt(0).toUpperCase() + result.slice(1);
}

// Core functions
let is_spinning = false;

function generate_name() {
    if (is_spinning) {
        return;
    }

    const theme = theme_select.value;
    const length = length_select.value;
    const count = parseInt(bulk_count.value) || 1;
    const bank = (theme === "all") ? get_combined_bank() : word_banks[theme];
    const template_list = templates[length];
    const use_animation = count > 1;

    const generated_names = [];
    for (let i = 0; i < count; i++) {
        let attempts = 0;
        let new_name = "";
        do {
            const template = template_list[random_index(template_list)];
            new_name = template(bank);
            attempts++;
        } while (session_names.has(new_name) && attempts < 50);

        session_names.add(new_name);
        generated_names.push(new_name);
    }

    // Auto-save if bulk generating
    if (count > 1) {
        generated_names.forEach(name => {
            if (!favorites.includes(name)) {
                favorites.unshift(name);
            }
        });
        save_favorites_to_storage();
        render_favorites();
    }

    const final_name = generated_names[generated_names.length - 1];

    if (use_animation) {
        // Start slot machine animation
        is_spinning = true;
        generate_btn.disabled = true;
        generate_btn.classList.add("spinning");
        name_display.classList.add("has_name", "slot_spinning");

        const spin_duration = 1200; // Total animation time in ms
        const initial_interval = 50; // Starting speed (fast)
        const final_interval = 150; // Ending speed (slow)
        const start_time = Date.now();

        function spin_tick() {
            const elapsed = Date.now() - start_time;
            const progress = Math.min(elapsed / spin_duration, 1);

            if (progress < 1) {
                // Generate random preview name
                const preview_template = template_list[random_index(template_list)];
                const preview_name = preview_template(bank);
                name_display.innerHTML = "<span class=\"generated_name slot_text\">" + preview_name + "</span>";

                // Ease out
                const eased_progress = 1 - Math.pow(1 - progress, 3);
                const current_interval = initial_interval + (final_interval - initial_interval) * eased_progress;

                setTimeout(spin_tick, current_interval);
            } else {
                // Animation complete
                current_name = final_name;
                is_spinning = false;
                generate_btn.disabled = false;
                generate_btn.classList.remove("spinning");
                name_display.classList.remove("slot_spinning");

                update_display();

                // Enable action buttons
                copy_btn.disabled = false;
                save_btn.disabled = false;
            }
        }

        spin_tick();
    } else {
        // Instant generation
        current_name = final_name;
        update_display();
        copy_btn.disabled = false;
        save_btn.disabled = false;
    }
}

function update_display() {
    name_display.innerHTML = "<span class=\"generated_name\">" + current_name + "</span>";
    name_display.classList.add("has_name");
}

function copy_name_to_clipboard() {
    if (!current_name) {
        return;
    }

    navigator.clipboard.writeText(current_name).then(function () {
        show_tooltip(copy_tooltip);
    }).catch(function (err) {
        console.error("Failed to copy:", err);
    });
}

function show_tooltip(tooltip_element) {
    tooltip_element.classList.add("show");
    setTimeout(function () {
        tooltip_element.classList.remove("show");
    }, 1500);
}

function save_name_to_favorites() {
    if (!current_name) {
        return;
    }

    // Check if already in favorites
    if (favorites.includes(current_name)) {
        return;
    }

    favorites.unshift(current_name);
    save_favorites_to_storage();
    render_favorites();
}

function remove_from_favorites(name) {
    const index = favorites.indexOf(name);
    if (index > -1) {
        favorites.splice(index, 1);
        save_favorites_to_storage();
        render_favorites();
    }
}

function clear_all_favorites() {
    if (favorites.length === 0) {
        return;
    }

    if (confirm("Are you sure you want to clear all favorites?")) {
        favorites = [];
        save_favorites_to_storage();
        render_favorites();
    }
}

function copy_favorite_to_clipboard(name, button) {
    navigator.clipboard.writeText(name).then(function () {
        const tooltip = button.querySelector(".tooltip");
        if (tooltip) {
            show_tooltip(tooltip);
        }
    }).catch(function (err) {
        console.error("Failed to copy:", err);
    });
}

function render_favorites() {
    if (favorites.length === 0) {
        favorites_list.innerHTML = "<p class=\"empty_favorites\">No favorites yet. Generate and save some names!</p>";
        return;
    }

    let html = "";
    for (let i = 0; i < favorites.length; i++) {
        const name = favorites[i];
        const escaped_name = escape_html(name);
        html += "<div class=\"favorite_card\">";
        html += "<span class=\"favorite_name\">" + escaped_name + "</span>";
        html += "<div class=\"favorite_actions\">";
        html += "<button class=\"icon_btn copy_fav_btn\" data-name=\"" + escaped_name + "\" aria-label=\"Copy\">";
        html += "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg>";
        html += "<span class=\"tooltip\">Copied!</span>";
        html += "</button>";
        html += "<button class=\"icon_btn delete_btn\" data-name=\"" + escaped_name + "\" aria-label=\"Delete\">";
        html += "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path></svg>";
        html += "</button>";
        html += "</div>";
        html += "</div>";
    }

    favorites_list.innerHTML = html;

    // Attach event listeners to new buttons
    const copy_buttons = favorites_list.querySelectorAll(".copy_fav_btn");
    copy_buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            copy_favorite_to_clipboard(this.dataset.name, this);
        });
    });

    const delete_buttons = favorites_list.querySelectorAll(".delete_btn");
    delete_buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            remove_from_favorites(this.dataset.name);
        });
    });
}

function escape_html(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

// LocalStorage functions
function save_preferences() {
    const prefs = {
        theme: theme_select.value,
        length: length_select.value,
        bulk_count: bulk_count.value,
        dark_mode: document.documentElement.getAttribute("data-theme") !== "light"
    };
    localStorage.setItem("project_name_gen_prefs", JSON.stringify(prefs));
}

function load_preferences() {
    const stored = localStorage.getItem("project_name_gen_prefs");
    if (stored) {
        try {
            const prefs = JSON.parse(stored);
            theme_select.value = prefs.theme || "fantasy";
            length_select.value = prefs.length || "medium";
            bulk_count.value = prefs.bulk_count || 1;

            if (prefs.dark_mode === false) {
                document.documentElement.setAttribute("data-theme", "light");
            }
        } catch (e) {
            console.error("Failed to load preferences:", e);
        }
    }
}

function save_favorites_to_storage() {
    localStorage.setItem("project_name_gen_favorites", JSON.stringify(favorites));
}

function load_favorites() {
    const stored = localStorage.getItem("project_name_gen_favorites");
    if (stored) {
        try {
            favorites = JSON.parse(stored);
            render_favorites();
        } catch (e) {
            console.error("Failed to load favorites:", e);
            favorites = [];
        }
    }
}

// Theme toggle
function toggle_theme() {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light") {
        document.documentElement.removeAttribute("data-theme");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
    save_preferences();
}
