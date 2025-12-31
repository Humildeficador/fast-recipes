export const test = [
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
          "pediatric_calculation": "peso x 0.4",
          "duration_text": "Uso contínuo ou conforme sintomas"
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
          "pediatric_calculation": null,
          "duration_text": "Uso contínuo ou conforme sintomas"
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
          "pediatric_calculation": "peso x 0.02ml",
          "duration_text": "imediato"
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
          "pediatric_calculation": "1 gota/kg",
          "duration_text": "3 dias, 5 dias"
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
          "pediatric_calculation": null,
          "duration_text": "5 dias"
        }
      }
    ]
  }
]