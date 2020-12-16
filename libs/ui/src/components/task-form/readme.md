# task-form



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type    | Default     |
| -------- | --------- | ----------- | ------- | ----------- |
| `labels` | --        |             | `any[]` | `undefined` |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `taskAdded` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [task-labels](../task-labels)
- [date-selector](../date-selector)

### Graph
```mermaid
graph TD;
  task-form --> task-labels
  task-form --> date-selector
  task-labels --> task-label-modal
  date-selector --> tdn-ui-icon
  date-selector --> task-date-modal
  style task-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
