# loop-ui-icon



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                 | Type                                                                                                                                                                                                                                                                                       | Default     |
| ----------- | ------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `ariaLabel` | `aria-label` | Specifies the label to use for accessibility. Defaults to the icon name.                    | `string`                                                                                                                                                                                                                                                                                   | `undefined` |
| `color`     | `color`      |                                                                                             | `"app-text-invalid" \| "app-text-primary" \| "app-text-secondary" \| "color-blue" \| "color-green" \| "color-neutral-0" \| "color-neutral-10" \| "color-neutral-100" \| "color-neutral-25" \| "color-neutral-50" \| "color-neutral-90" \| "color-orange" \| "color-purple" \| "color-red"` | `undefined` |
| `lazy`      | `lazy`       | If enabled, icon will be loaded lazily when it's visible in the viewport. Default, `false`. | `boolean`                                                                                                                                                                                                                                                                                  | `false`     |
| `name`      | `name`       | Specifies which icon to use from the built-in set of icons.                                 | `string`                                                                                                                                                                                                                                                                                   | `undefined` |
| `size`      | `size`       | The size of the icon: xxs through xl                                                        | `"l" \| "m" \| "s" \| "xl" \| "xs"`                                                                                                                                                                                                                                                        | `undefined` |


## Dependencies

### Used by

 - [date-selector](../../date-selector)
 - [task-form](../../task-form)
 - [to-done-header](../../to-done-header)

### Graph
```mermaid
graph TD;
  date-selector --> tdn-ui-icon
  task-form --> tdn-ui-icon
  to-done-header --> tdn-ui-icon
  style tdn-ui-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
