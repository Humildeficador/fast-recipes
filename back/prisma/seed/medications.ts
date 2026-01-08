export const medications = [
  {
    "generic_name": "Dipirona",
    "category_slugs": [
      "analgesico",
      "antipiretico"
    ],
    "presentations": [
      {
        "form_slug": "gotas",
        "concentration": [
          "500mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "6/6",
            "4/4"
          ],
          "frequency_unit": "horas",
          "quantity": [
            18,
            20,
            40
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": ["peso x 0.4"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      },
      {
        "form_slug": "comprimido",
        "concentration": [
          "500mg",
          "1g"
        ],
        "default_recipe": {
          "frequency": [
            "6/6",
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1,
            2
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      },
      {
        "form_slug": "injetavel",
        "concentration": [
          "Ampola"
        ],
        "default_recipe": {
          "frequency": [
            "dose única"
          ],
          "frequency_unit": "dose única",
          "quantity": [
            1
          ],
          "quantity_unit": "amp",
          "pediatric_calculation": ["peso x 0.02ml"],
          "duration_text": ["imediato"]
        }
      }
    ]
  },
  {
    "generic_name": "Ibuprofeno",
    "category_slugs": [
      "analgesico",
      "antipiretico",
      "anti_inflamatorio"
    ],
    "presentations": [
      {
        "form_slug": "gotas",
        "concentration": [
          "50mg/ml",
          "100mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            40
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": ["1 gota/kg"],
          "duration_text": ["3 dias, 5 dias"]
        }
      },
      {
        "form_slug": "comprimido",
        "concentration": [
          "300mg",
          "600mg"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1,
            2
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Paracetamol",
    "category_slugs": [
      "analgesico",
      "antipiretico"
    ],
    "presentations": [
      {
        "form_slug": "gotas",
        "concentration": [
          "200mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "6/6"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "gt",
          "pediatric_calculation": ["1 gota/kg"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      },
      {
        "form_slug": "comprimido",
        "concentration": [
          "500mg",
          "750mg"
        ],
        "default_recipe": {
          "frequency": [
            "6/6"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Simeticona",
    "category_slugs": [
      "antiflatulento",
      "antigases"
    ],
    "presentations": [
      {
        "form_slug": "gotas",
        "concentration": [
          "75mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            5,
            40
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Dimenidrinato + Piridoxina (Dramin)",
    "category_slugs": [
      "antiemetico",
      "antivertiginoso"
    ],
    "presentations": [
      {
        "form_slug": "gotas",
        "concentration": [
          "25mg+5mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "6/6",
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            40
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": ["1 gota/kg"],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Bromoprida",
    "category_slugs": [
      "procinetico",
      "antiemetico"
    ],
    "presentations": [
      {
        "form_slug": "gotas",
        "concentration": [
          "4mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            40
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": ["1 gota/kg"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Tramadol",
    "category_slugs": [
      "analgesico",
      "analgesico_opioide"
    ],
    "presentations": [
      {
        "form_slug": "gotas",
        "concentration": [
          "50mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "6/6"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "gt",
          "pediatric_calculation": ["conforme dor intensa"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Escopolamina (Buscopan)",
    "category_slugs": [
      "antiespasmodico"
    ],
    "presentations": [
      {
        "form_slug": "gotas",
        "concentration": [
          "10mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            40
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      },
      {
        "form_slug": "comprimido",
        "concentration": [
          "10mg"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Cerumin",
    "category_slugs": [
      "ceruminolitico"
    ],
    "presentations": [
      {
        "form_slug": "gotas",
        "concentration": [
          "solução otológica"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            5
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Otosporin",
    "category_slugs": [
      "antibiotico_otologico",
      "analgesico_otologico",
      "corticoide_otologico"
    ],
    "presentations": [
      {
        "form_slug": "gotas",
        "concentration": [
          "solução otológica"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            2
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": [],
          "duration_text": ["7 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Diclofenaco",
    "category_slugs": [
      "analgesico",
      "anti_inflamatorio"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "50mg"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["5 dias"]
        }
      },
      {
        "form_slug": "injetavel",
        "concentration": [
          "Ampola"
        ],
        "default_recipe": {
          "frequency": [
            "dose única"
          ],
          "frequency_unit": "dose única",
          "quantity": [
            1
          ],
          "quantity_unit": "amp",
          "pediatric_calculation": [],
          "duration_text": ["imediato"]
        }
      }
    ]
  },
  {
    "generic_name": "Azitromicina",
    "category_slugs": [
      "antibiotico"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "500mg"
        ],
        "default_recipe": {
          "frequency": [
            "1"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["5 dias"]
        }
      },
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "200mg/5ml"
        ],
        "default_recipe": {
          "frequency": [
            "1"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [],
          "quantity_unit": "ml",
          "pediatric_calculation": ["peso/4 ml"],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Ciprofloxacino",
    "category_slugs": [
      "antibiotico"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "500mg"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["7 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Cefalexina",
    "category_slugs": [
      "antibiotico"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "500mg"
        ],
        "default_recipe": {
          "frequency": [
            "6/6"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["7 dias"]
        }
      },
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "250mg/5ml"
        ],
        "default_recipe": {
          "frequency": [
            "6/6"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "ml",
          "pediatric_calculation": ["variável"],
          "duration_text": ["7-10 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Prednisona",
    "category_slugs": [
      "corticoide",
      "anti_inflamatorio"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "20mg"
        ],
        "default_recipe": {
          "frequency": [
            "1 (pela manhã)"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            1,
            2
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["3 dias, 5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Loratadina",
    "category_slugs": [
      "anti_histaminico",
      "anti_alergico"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "10mg"
        ],
        "default_recipe": {
          "frequency": [
            "1 (à noite)"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["5 dias, 7 dias"]
        }
      },
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "1mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "1"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            5,
            10
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["5 dias, 7 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Ebastina",
    "category_slugs": [
      "anti_histaminico",
      "anti_alergico"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "20mg"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Metoclopramida",
    "category_slugs": [
      "procinetico",
      "antiemetico"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "10mg"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Ondansetrona",
    "category_slugs": [
      "antiemetico"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "8mg"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Ciclobenzaprina (Miosan)",
    "category_slugs": [
      "relaxante_muscular"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "5mg",
          "10mg"
        ],
        "default_recipe": {
          "frequency": [
            "1 (à noite)",
            "3"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Ivermectina",
    "category_slugs": [
      "antiparasitario"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "6mg"
        ],
        "default_recipe": {
          "frequency": [
            "1"
          ],
          "frequency_unit": "dose única",
          "quantity": [],
          "quantity_unit": "cp",
          "pediatric_calculation": ["variável conforme peso (0.2mg/kg)"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Sulfametoxazol Trimetropina",
    "category_slugs": [
      "antibiotico"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "400+80mg",
          "800+160mg"
        ],
        "default_recipe": {
          "frequency": [
            "12/12",
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["7 dias"]
        }
      },
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "200+40mg/5ml"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "ml",
          "pediatric_calculation": ["peso/2 ml"],
          "duration_text": ["7 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Naproxeno",
    "category_slugs": [
      "analgesico",
      "antipiretico",
      "anti_inflamatorio"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "500mg"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Sumatriptano",
    "category_slugs": [
      "antienxaquecoso",
      "vasoconstritor"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "50mg"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["1 dia"]
        }
      }
    ]
  },
  {
    "generic_name": "Racecadotrila (Tiorfan)",
    "category_slugs": [
      "antidiarreico"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "100mg"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["até cessar diarreia (max 7 dias)"]
        }
      }
    ]
  },
  {
    "generic_name": "Omeprazol",
    "category_slugs": [
      "inibidor_de_bomba_de_protons",
      "antiulceroso"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "20mg"
        ],
        "default_recipe": {
          "frequency": [
            "1 (jejum)"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["10 dias, 30 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Paracetamol + Codeína (Tylex)",
    "category_slugs": [
      "analgesico",
      "analgesico_opioide"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "500mg + 7.5mg",
          "500mg + 30mg"
        ],
        "default_recipe": {
          "frequency": [
            "4/4"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Nitrofurantoina",
    "category_slugs": [
      "antibiotico",
      "antisseptico_urinario"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "100mg"
        ],
        "default_recipe": {
          "frequency": [
            "6/6"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["7 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Tansulosina",
    "category_slugs": [
      "bloqueador_alfa_adrenergico"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "0.4mg"
        ],
        "default_recipe": {
          "frequency": [
            "1 (à noite)"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["30 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Etoricoxibe (Ecoxe)",
    "category_slugs": [
      "analgesico",
      "anti_inflamatorio"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "90mg"
        ],
        "default_recipe": {
          "frequency": [
            "1"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Flunarizina",
    "category_slugs": [
      "antivertiginoso",
      "bloqueador_canal_calcio"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "10mg"
        ],
        "default_recipe": {
          "frequency": [
            "1 (à noite)"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["2 semanas"]
        }
      }
    ]
  },
  {
    "generic_name": "Valeriana Officinalis",
    "category_slugs": [
      "fitoterapico",
      "ansiolitico"
    ],
    "presentations": [
      {
        "form_slug": "comprimido",
        "concentration": [
          "0.8mg a 3.5mg"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "cp",
          "pediatric_calculation": [],
          "duration_text": ["30 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Amoxicilina",
    "category_slugs": [
      "antibiotico"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "250mg/5ml",
          "400mg/5ml"
        ],
        "default_recipe": {
          "frequency": [
            "8/8",
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "ml",
          "pediatric_calculation": ["peso/3 ml, peso/2 ml"],
          "duration_text": ["7 dias, 10 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Amoxicilina + Clavulanato",
    "category_slugs": [
      "antibiotico"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "250mg+62,5mg/5ml"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "ml",
          "pediatric_calculation": ["peso/3 ml, peso x 0.3"],
          "duration_text": ["10 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Prednisolona",
    "category_slugs": [
      "corticoide",
      "anti_inflamatorio"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "3mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "1"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [],
          "quantity_unit": "ml",
          "pediatric_calculation": ["peso/3 ml, 1mg/kg/dia"],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Dexclorfeniramina",
    "category_slugs": [
      "anti_histaminico",
      "anti_alergico"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "2mg/5ml"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            5
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Hidroxizina",
    "category_slugs": [
      "anti_histaminico",
      "anti_alergico",
      "antipruriginoso"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "2mg/ml",
          "25mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "ml",
          "pediatric_calculation": ["peso/3 ml"],
          "duration_text": ["3 dias, 5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Desloratadina",
    "category_slugs": [
      "anti_histaminico",
      "anti_alergico"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "0.5mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "1"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            2,
            2.5,
            5,
            10
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Fexofenadina (Allegra)",
    "category_slugs": [
      "anti_histaminico",
      "anti_alergico"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "variável"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [
            2.5,
            5
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Lactulose",
    "category_slugs": [
      "laxante"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "667mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [
            5,
            10,
            15
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Oleo Mineral",
    "category_slugs": [
      "laxante"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "oleo"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["30 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Acebrofilina",
    "category_slugs": [
      "broncodilatador",
      "expectorante"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "5mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "ml",
          "pediatric_calculation": ["variável"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Ambroxol",
    "category_slugs": [
      "expectorante",
      "mucolitico"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "15mg/5ml",
          "3mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "8/8",
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [
            2.5,
            5
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Acetilcisteina",
    "category_slugs": [
      "expectorante",
      "mucolitico"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "20mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "12/12",
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            5
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Levodropropizina",
    "category_slugs": [
      "antitussigeno"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "30mg/5ml"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            3,
            5,
            10
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": ["peso/6 ml"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Claritromicina",
    "category_slugs": [
      "antibiotico"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "125mg/5ml",
          "250mg/5ml"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "ml",
          "pediatric_calculation": ["peso x 0.15, peso x 0.3"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Albendazol",
    "category_slugs": [
      "antiparasitario",
      "antihelmintico"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "40mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "1"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            10
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Enterogermina",
    "category_slugs": [
      "probiotico"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "solução oral"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Florax",
    "category_slugs": [
      "probiotico"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "flaconete"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Sulfato De Zinco",
    "category_slugs": [
      "suplemento_mineral"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "4mg/ml",
          "20mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "1"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            2.5,
            5
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["10 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Hedera Helix",
    "category_slugs": [
      "fitoterapico",
      "expectorante"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "xarope"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            2.5,
            5,
            10
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Vick 44E",
    "category_slugs": [
      "expectorante",
      "antitussigeno"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "xarope"
        ],
        "default_recipe": {
          "frequency": [
            "4/4",
            "6/6"
          ],
          "frequency_unit": "horas",
          "quantity": [
            15
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Hidroxido De Aluminio",
    "category_slugs": [
      "antiacido"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "suspensão"
        ],
        "default_recipe": {
          "frequency": [
            "1"
          ],
          "frequency_unit": "após refeições",
          "quantity": [
            10
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Nistatina",
    "category_slugs": [
      "antifungico"
    ],
    "presentations": [
      {
        "form_slug": "xarope_suspensao",
        "concentration": [
          "solução oral"
        ],
        "default_recipe": {
          "frequency": [
            "6/6"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1,
            2,
            3,
            5
          ],
          "quantity_unit": "ml",
          "pediatric_calculation": [],
          "duration_text": ["5-14 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Mupirocina",
    "category_slugs": [
      "antibiotico_topico"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "2%",
          "20mg/g"
        ],
        "default_recipe": {
          "frequency": [
            "2",
            "3",
            "8/8"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["fina camada"],
          "duration_text": ["5-14 dias, 10 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Neomicina Bacitracina",
    "category_slugs": [
      "antibiotico_topico"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "pomada"
        ],
        "default_recipe": {
          "frequency": [
            "8/8",
            "3"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["fina camada"],
          "duration_text": ["10 dias, 14 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Nebacetin",
    "category_slugs": [
      "antibiotico_topico"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "pomada"
        ],
        "default_recipe": {
          "frequency": [
            "3"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["fina camada"],
          "duration_text": ["7 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Cetoconazol",
    "category_slugs": [
      "antifungico_topico"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "2% creme"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["fina camada"],
          "duration_text": ["2-4 semanas"]
        }
      }
    ]
  },
  {
    "generic_name": "Sulfeto De Selenio",
    "category_slugs": [
      "antifungico_topico",
      "antiseborreico"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "2.5% shampoo"
        ],
        "default_recipe": {
          "frequency": [
            "1"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["aplicar no couro cabeludo"],
          "duration_text": ["4 semanas"]
        }
      }
    ]
  },
  {
    "generic_name": "Permetrina",
    "category_slugs": [
      "escabicida",
      "pediculicida"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "1% (capilar)",
          "5% (loção corporal)"
        ],
        "default_recipe": {
          "frequency": [
            "1 (repetir em 7 dias)"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["aplicar no corpo todo/cabelo"],
          "duration_text": ["3 noites"]
        }
      }
    ]
  },
  {
    "generic_name": "Enxofre Precipitado",
    "category_slugs": [
      "escabicida",
      "antisseptico_topico"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "2-6% creme/loção"
        ],
        "default_recipe": {
          "frequency": [
            "1 (à noite)"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["aplicar na pele"],
          "duration_text": ["3 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Dexametasona",
    "category_slugs": [
      "corticoide",
      "anti_inflamatorio",
      "corticoide_topico",
      "anti_inflamatorio_topico"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "1mg/g"
        ],
        "default_recipe": {
          "frequency": [
            "2"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["fina camada"],
          "duration_text": ["5 dias, 7 dias"]
        }
      },
      {
        "form_slug": "injetavel",
        "concentration": [
          "Ampola"
        ],
        "default_recipe": {
          "frequency": [],
          "frequency_unit": "Conforme orientação",
          "quantity": [
            1
          ],
          "quantity_unit": "amp",
          "pediatric_calculation": ["peso x 0.15"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Hidrocortisona",
    "category_slugs": [
      "corticoide",
      "anti_inflamatorio",
      "corticoide_topico",
      "anti_inflamatorio_topico"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "1%"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["fina camada"],
          "duration_text": ["7 dias, 10 dias"]
        }
      },
      {
        "form_slug": "injetavel",
        "concentration": [
          "Injetável"
        ],
        "default_recipe": {
          "frequency": [],
          "frequency_unit": "Conforme orientação",
          "quantity": [],
          "quantity_unit": "amp",
          "pediatric_calculation": ["peso x 0.08"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Trok N",
    "category_slugs": [
      "antibiotico_topico",
      "antifungico_topico",
      "corticoide_topico"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "pomada"
        ],
        "default_recipe": {
          "frequency": [
            "2"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["fina camada"],
          "duration_text": ["10 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Nistatina + Oxido Zinco",
    "category_slugs": [
      "antifungico_topico",
      "protetor_de_pele"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "pomada"
        ],
        "default_recipe": {
          "frequency": [
            "1",
            "12/12"
          ],
          "frequency_unit": "a cada troca",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["camada"],
          "duration_text": ["5-10 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Betametasona Hialuronidase",
    "category_slugs": [
      "corticoide_topico"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "pomada"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["fina camada"],
          "duration_text": ["3 semanas"]
        }
      }
    ]
  },
  {
    "generic_name": "Triancinolona Acetonida",
    "category_slugs": [
      "corticoide_topico_oral"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "1mg/g"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["fina camada"],
          "duration_text": ["7 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Creme De Ureia",
    "category_slugs": [
      "hidratante",
      "queratolitico"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "0.2g/g"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["aplicar sobre a pele"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Age Acidos Graxos",
    "category_slugs": [
      "cicatrizante",
      "hidratante"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "tópico"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["aplicar na região"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Flogoral Spray",
    "category_slugs": [
      "anestesico_local",
      "anti_inflamatorio_topico"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "spray"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["aplicar na garganta"],
          "duration_text": ["7 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Permanganato De Potassio",
    "category_slugs": [
      "antisseptico_topico"
    ],
    "presentations": [
      {
        "form_slug": "topico_creme",
        "concentration": [
          "100mg"
        ],
        "default_recipe": {
          "frequency": [
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "aplicação",
          "pediatric_calculation": ["diluir 1 cp em 2L água para banho"],
          "duration_text": ["5 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Soro Fisiologico",
    "category_slugs": [
      "solucao_salina",
      "fluidificante"
    ],
    "presentations": [
      {
        "form_slug": "spray",
        "concentration": [
          "0.9%"
        ],
        "default_recipe": {
          "frequency": [
            "3",
            "4-5",
            "3/3"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            5,
            10
          ],
          "quantity_unit": "jato",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Budesonida",
    "category_slugs": [
      "corticoide_nasal",
      "corticoide_inalatorio"
    ],
    "presentations": [
      {
        "form_slug": "spray",
        "concentration": [
          "50mcg (nasal)",
          "200mcg (inalatório)"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [
            2
          ],
          "quantity_unit": "jato",
          "pediatric_calculation": [],
          "duration_text": ["10 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Beclometasona",
    "category_slugs": [
      "corticoide_nasal",
      "corticoide_inalatorio"
    ],
    "presentations": [
      {
        "form_slug": "spray",
        "concentration": [
          "50mcg"
        ],
        "default_recipe": {
          "frequency": [
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "jato",
          "pediatric_calculation": ["1 jato, 2 jatos, 3 puffs"],
          "duration_text": ["10 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Salbutamol",
    "category_slugs": [
      "broncodilatador"
    ],
    "presentations": [
      {
        "form_slug": "spray",
        "concentration": [
          "100mcg/dose"
        ],
        "default_recipe": {
          "frequency": [
            "6/6",
            "4/4"
          ],
          "frequency_unit": "horas",
          "quantity": [
            4
          ],
          "quantity_unit": "jato",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Budesonida + Formoterol (Symbicort)",
    "category_slugs": [
      "broncodilatador",
      "corticoide_inalatorio"
    ],
    "presentations": [
      {
        "form_slug": "spray",
        "concentration": [
          "200mcg+6mcg"
        ],
        "default_recipe": {
          "frequency": [
            "8/8",
            "12/12"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "jato",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Tobramicina",
    "category_slugs": [
      "antibiotico_oftalmico"
    ],
    "presentations": [
      {
        "form_slug": "colirio",
        "concentration": [
          "3mg/ml",
          "0.3%"
        ],
        "default_recipe": {
          "frequency": [
            "6/6",
            "4/4",
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1,
            2
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": [],
          "duration_text": ["5 dias, 7 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Tobramicina + Dexametasona",
    "category_slugs": [
      "antibiotico_oftalmico",
      "corticoide_oftalmico"
    ],
    "presentations": [
      {
        "form_slug": "colirio",
        "concentration": [
          "3+1mg/ml"
        ],
        "default_recipe": {
          "frequency": [
            "4/4"
          ],
          "frequency_unit": "horas",
          "quantity": [
            2
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": [],
          "duration_text": ["7 a 14 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Carmelose Sodica",
    "category_slugs": [
      "lubrificante_ocular"
    ],
    "presentations": [
      {
        "form_slug": "colirio",
        "concentration": [
          "0.5%"
        ],
        "default_recipe": {
          "frequency": [
            "2/2",
            "8/8"
          ],
          "frequency_unit": "horas",
          "quantity": [
            1
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Hialuronato De Sodio",
    "category_slugs": [
      "lubrificante_ocular"
    ],
    "presentations": [
      {
        "form_slug": "colirio",
        "concentration": [
          "0.15%"
        ],
        "default_recipe": {
          "frequency": [
            "4"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [],
          "quantity_unit": "gt",
          "pediatric_calculation": ["aplicar no olho"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Ecofilm",
    "category_slugs": [
      "lubrificante_ocular"
    ],
    "presentations": [
      {
        "form_slug": "colirio",
        "concentration": [
          "colirio"
        ],
        "default_recipe": {
          "frequency": [
            "4"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            1
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Lacribell",
    "category_slugs": [
      "lubrificante_ocular"
    ],
    "presentations": [
      {
        "form_slug": "colirio",
        "concentration": [
          "colirio"
        ],
        "default_recipe": {
          "frequency": [
            "5"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            1
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Moxifloxacino",
    "category_slugs": [
      "antibiotico_oftalmico"
    ],
    "presentations": [
      {
        "form_slug": "colirio",
        "concentration": [
          "0.5%"
        ],
        "default_recipe": {
          "frequency": [
            "4"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [
            1
          ],
          "quantity_unit": "gt",
          "pediatric_calculation": [],
          "duration_text": ["7 a 14 dias"]
        }
      }
    ]
  },
  {
    "generic_name": "Sais Reidratacao Oral",
    "category_slugs": [
      "reidratacao",
      "repositor_eletrolitico"
    ],
    "presentations": [
      {
        "form_slug": "sache",
        "concentration": [
          "pó para solução"
        ],
        "default_recipe": {
          "frequency": [
            "ao longo do dia"
          ],
          "frequency_unit": "após evacuações",
          "quantity": [
            1
          ],
          "quantity_unit": "sachê",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Fosfomicina",
    "category_slugs": [
      "antibiotico"
    ],
    "presentations": [
      {
        "form_slug": "sache",
        "concentration": [
          "3g"
        ],
        "default_recipe": {
          "frequency": [
            "dose única"
          ],
          "frequency_unit": "dose única",
          "quantity": [
            1
          ],
          "quantity_unit": "sachê",
          "pediatric_calculation": [],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Macrogol",
    "category_slugs": [
      "laxante_osmotico"
    ],
    "presentations": [
      {
        "form_slug": "sache",
        "concentration": [
          "3350"
        ],
        "default_recipe": {
          "frequency": [
            "1"
          ],
          "frequency_unit": "vezes ao dia",
          "quantity": [],
          "quantity_unit": "sachê",
          "pediatric_calculation": ["0.3 - 1.4 g/kg/dia"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Metilprednisolona",
    "category_slugs": [
      "corticoide",
      "anti_inflamatorio"
    ],
    "presentations": [
      {
        "form_slug": "injetavel",
        "concentration": [
          "Injetável"
        ],
        "default_recipe": {
          "frequency": [],
          "frequency_unit": "Conforme orientação",
          "quantity": [],
          "quantity_unit": "amp",
          "pediatric_calculation": ["peso x 0.016"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Adrenalina",
    "category_slugs": [
      "vasopressor",
      "broncodilatador",
      "antineoplasico"
    ],
    "presentations": [
      {
        "form_slug": "injetavel",
        "concentration": [
          "Ampola"
        ],
        "default_recipe": {
          "frequency": [],
          "frequency_unit": "Conforme orientação",
          "quantity": [],
          "quantity_unit": "amp",
          "pediatric_calculation": ["peso/100, peso/10"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Ceftriaxona",
    "category_slugs": [
      "antibiotico"
    ],
    "presentations": [
      {
        "form_slug": "injetavel",
        "concentration": [
          "Injetável"
        ],
        "default_recipe": {
          "frequency": [],
          "frequency_unit": "Conforme orientação",
          "quantity": [],
          "quantity_unit": "amp",
          "pediatric_calculation": ["dose terapêutica"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Penicilina Benzatina",
    "category_slugs": [
      "antibiotico"
    ],
    "presentations": [
      {
        "form_slug": "injetavel",
        "concentration": [
          "600.000ui",
          "1.200.000ui"
        ],
        "default_recipe": {
          "frequency": [
            "dose única"
          ],
          "frequency_unit": "dose única",
          "quantity": [],
          "quantity_unit": "amp",
          "pediatric_calculation": ["dose única"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  },
  {
    "generic_name": "Benalete",
    "category_slugs": [
      "antitussigeno",
      "analgesico_topico_oral"
    ],
    "presentations": [
      {
        "form_slug": "pastilha",
        "concentration": [
          "pastilha"
        ],
        "default_recipe": {
          "frequency": [
            "1",
            "6/6"
          ],
          "frequency_unit": "horas",
          "quantity": [],
          "quantity_unit": "un",
          "pediatric_calculation": ["até 2 pastilhas"],
          "duration_text": ["Uso contínuo ou conforme sintomas"]
        }
      }
    ]
  }
]