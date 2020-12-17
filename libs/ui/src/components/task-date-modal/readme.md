# task-date-modal



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description | Type     | Default     |
| ----------------------- | ------------------------- | ----------- | -------- | ----------- |
| `currentlySelectedDate` | `currently-selected-date` |             | `string` | `undefined` |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `dateSelection` |             | `CustomEvent<any>` |
| `modalClose`    |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [date-selector](../date-selector)

### Depends on

- [td-heading](../td-heading)
- [td-button](../td-button)

### Graph
```mermaid
graph TD;
  task-date-modal --> td-heading
  task-date-modal --> td-button
  date-selector --> task-date-modal
  style task-date-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
