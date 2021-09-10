---
title: Contact
sections:
  - section_id: contact
    type: section_contact
    title: Contact Us
    subtitle: >-

    form_id: contactForm
    form_fields:
      - input_type: text
        name: first-name
        label: First name
        auto_complete: given-name
        is_required: true
        col_span: 1
      - input_type: text
        name: last-name
        label: Last name
        auto_complete: family-name
        is_required: true
        col_span: 1
      - input_type: email
        name: email
        label: Email
        auto_complete: email
        is_required: true
        col_span: 2
      - input_type: text
        name: phone-number
        label: Phone
        auto_complete: tel
        is_required: false
        default_value: +1 (555) 987-6543
        col_span: 2
      - input_type: textarea
        name: how-can-we-help
        label: How can we help you?
        is_required: true
        col_span: 2
      - input_type: radio
        name: number-of-investments
        label: Number of investments
        is_required: true
        options:
          - id: investments-under-5
            label: Less than 5
          - id: investments-5-to-25
            label: 5 to 25
          - id: investments-25-to-50
            label: 25 to 50
          - id: investments-above-50
            label: 50+
        col_span: 2
      - input_type: text
        name: how-did-you-hear-about-us
        label: How did you hear about us?
        is_required: false
        col_span: 2
    submit_label: Let's talk
    hide_labels: true
seo:
  title: Contact
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
layout: landing
---
