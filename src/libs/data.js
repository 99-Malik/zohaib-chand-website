export const companyName = "Gulf Service Center UAE";

export const phoneNumber = "+971502947701";

export const sendMessage = () => {
  const message = "Hello, I want your repair services";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export const dialPhone = () => {
  window.location.href = `tel:${phoneNumber}`;
};

// Stable Wikimedia image URLs (direct file paths)
const img = {
  dishwasher:
    "/dishwasher-repair.jpg",
  dryer:
    "/dryer-repair.jpg",
  washer:
    "/washing-machine-repair.jpg",
  stove:
    "/oven-repair.jpg",
  oven:
    "/oven-repair.jpg",
  fridge:
    "/fridge-repair.jpg",
  tv:
    "/tv-repair.jpg",
};

export const getData = (company) => {
  const allData = [
    {
      title: "Dishwasher Repair",
      imgUrl: img.dishwasher,
      slug: "dishwasher-repair",
      description: `Fast, reliable dishwasher repairs by certified techs. We diagnose drainage, heating, spray arm and control issues so your dishes come out spotless again.`,
      commonProblems: [
        "Not starting",
        "Not draining",
        "Leaking",
        "Poor cleaning",
        "Heater faults",
        "Door latch issues",
        "Long cycles",
        "Bad odors",
        "Error codes",
        "No fill",
      ],
    },
    {
      title: "Dryer Repair",
      imgUrl: img.dryer,
      slug: "dryer-repair",
      description: `No heat? Long cycles? We fix all dryer brands—belts, thermostats, motors and sensors—to get your laundry dry safely and efficiently.`,
      commonProblems: [
        "No start",
        "No heat",
        "Drum not spinning",
        "Overheating",
        "Noisy operation",
        "Cycle not finishing",
        "Burning smell",
        "Error codes",
        "Poor airflow",
        "Lint issues",
      ],
    },
    {
      title: "Washing Machine Repair",
      slug: "washing-machine-repair",
      imgUrl: img.washer,
      description: `From water fill and drain faults to bearings and control boards—we’ll restore smooth, quiet washing performance, same-day in most areas.`,
      commonProblems: [
        "Won’t power on",
        "No fill",
        "No drain",
        "Leaks",
        "Unbalanced spin",
        "Excessive noise",
        "Door lock",
        "Cycle stalls",
        "Overheating",
        "Error codes",
      ],
    },
    {
      title:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? "Stove / Cooker Repair"
          : "TV Repair",
      slug:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? "stove-cooker-repair"
          : "tv-repair",
      imgUrl:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? img.stove
          : img.tv,
      description:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? `Ignition clicks? Uneven heat? We service gas and electric cookers—burners, thermostats, valves, glass tops and more.`
          : `Blank screen, no signal or lines on display—our TV specialists handle boards, backlights, ports and software faults.`,
      commonProblems:
        company === "Bosch" || company === "Siemens" || company === companyName
          ? [
              "Burners not lighting",
              "Uneven heating",
              "Oven temp issues",
              "Ignition failure",
              "Gas leaks",
              "Glass top cracks",
              "Control faults",
              "Door not closing",
              "Self-clean issues",
              "Error codes",
            ]
          : [
              "No power",
              "No display",
              "No sound",
              "HDMI issues",
              "Backlight faults",
              "Color distortion",
              "Random restarts",
              "Wi-Fi issues",
              "Overheating",
              "Input problems",
            ],
    },
    {
      title: "Oven Repair",
      slug: "oven-repair",
      imgUrl: img.oven,
      description: `Consistent, accurate temperatures matter. We repair elements, fans, sensors and control boards for perfect bakes and roasts.`,
      commonProblems: [
        "No heat",
        "Temp swings",
        "Door seal issues",
        "Fan noise",
        "Ignition issues",
        "Thermostat faults",
        "Light out",
        "Error codes",
        "Electrical smells",
        "Tripping breaker",
      ],
    },
    {
      title: "Fridge Repair",
      slug: "fridge-repair",
      imgUrl: img.fridge,
      description: `Keep food safe with precise cooling. We fix compressors, fans, sensors, ice makers and defrost systems on all major brands.`,
      commonProblems: [
        "Not cooling",
        "Warm freezer",
        "Ice buildup",
        "Leaking water",
        "Loud humming",
        "Short cycling",
        "Door gasket",
        "Ice maker faults",
        "Coil issues",
        "Error codes",
      ],
    },
  ];

  const tvRepair =
    company === companyName && {
      title: "TV Repair",
      slug: "tv-repair",
      imgUrl: img.tv,
      description:
        "Enjoy your shows again—board, backlight, sound and connectivity fixes for all leading TVs.",
      commonProblems: [
        "No power",
        "Flicker",
        "No sound",
        "No picture",
        "HDMI issues",
        "Software glitches",
        "Color banding",
        "Overheating",
        "Wi-Fi issues",
        "Input selection",
      ],
    };

  return company === companyName && tvRepair
    ? allData.concat(tvRepair)
    : allData;
};
