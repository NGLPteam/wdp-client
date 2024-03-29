# Translation key groups

1. “app” // Words that are specifically about your app, like the app’s name
1. “common" // Things that are reused everywhere, like "Confirm" and "Cancel" on buttons
1. "glossary" // Words we want to be reused consistently inside texts
1. "lists" // Things that are used in lists (grids and tables)
1. "nav" // Labels that are used in the navigation (header, footer, or tabs)
1. "messages" // Messages displayed to the user, such as success or failure toasts
1. "actions" // Actions the user can take, such as add, create, or update
1. "form" // Things that are used in forms, such as fields and custom inputs

# i18n best practices

## Use generic i18n keys

---

Whenever possible, use generic, i.e. shorter i18n keys. The shorter the form, the more modules will exist where the key can be instantly reused.

_Bad:_

- common.users.hobbies.surfing

_Good:_

- common.save (Save)
- common.and (and)
- common.learn_more (Learn more)

## Avoid Complexity

Although i18n supports nested keys, deeply nested keys are harder to manage. If your translation file is broken up into several namespaces, it's recommend to not use more than two levels (three if necessary).

## Be Predictable

If you name your keys too abstract you will have trouble knowing what it actually says. If you name it too close to the actual content, changing text and keeping the key name in sync will be painful.

_Bad:_

- home.paragraph_1
- home.su_lbl

_Good:_

- home.user_welcome_text
- home.sign_up_free_trial_button_label

## Content Matters

It usually doesn’t matter if the key in question is part of the footer navigation used in a controller or within a special layout. Instead, give it a clear prefix that indicates the domain to which the key belongs and let the reader know about what might be the purpose of the key.

## Separate message bundles

Create separate message bundles for backend UI labels and frontend UI labels. Don’t store these two groups of text in the same properties files or message bundles. They are aimed at different audiences and have different localization requirements.

## Style

Stick to one writing style: snake_case and CamelCase are both fine, Just make sure to stay consistent.

If a key can contain children, use dot notation. Otherwise, use snake case:

```
"common": {
   "save": "Save",
   "cancel": "Cancel",
   "save_and_close": "Save & Close"
}

t('common.save')
t('common.cancel')
t('common.save_and_close')
```

Using snake case matches i18next’s format for things like pluralizations:

```
"glossary": {
   "collection": "Collection",
   "collection_other": "Collections"
}
```

## Avoid interpolated key strings

When referring to translation keys, avoid interpolation (e.g. `foo.${some_variable}.bar`). Interpolation is OK inside the translation file itself (e.g. `t(glossary.collection) created successfully` or `{{ name }} created successfully`).

## Keep It DRY

---

Before introducing a key, always check if another key under that resource or in the general namespace (continue reading to learn more) already exists, that expresses what should be displayed. Treat translations and keys like methods and avoid duplication.

[Naming and Managing Rails i18n Keys](https://phrase.com/blog/posts/ruby-lessons-learned-naming-and-managing-rails-i18n-keys/)
[i18n best practices :: Magnolia CMS Docs](https://docs.magnolia-cms.com/product-docs/6.2/Administration/Language/i18n-best-practices.html)