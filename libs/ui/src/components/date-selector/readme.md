# date-selector



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `date`   | `date`    |             | `string` | `undefined` |


## Dependencies

### Used by

 - [task-form](../task-form)

### Depends on

- [tdn-ui-icon](../design-system/icon)
- [task-date-modal](../task-date-modal)

### Graph
```mermaid
graph TD;
  date-selector --> tdn-ui-icon
  date-selector --> task-date-modal
  task-date-modal --> td-heading
  task-date-modal --> td-button
  task-form --> date-selector
  style date-selector fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
