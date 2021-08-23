# bit-docs-html-prev-next

## Use

To use, add bit-docs-html-prev-next to your bit-docs dependencies in package.json:

```json
{
  ...

  "bit-docs": {
    "dependencies": {
      "bit-docs-html-prev-next": "$VERSION"
    }
  }
}
```

Where `$VERSION` is the latest version on npm.

In your template add a `<bit-prev-next>` element:

```html
<bit-prev-next list-selector="#my-custom-selector"></bit-prev-next>
```