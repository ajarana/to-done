# task-date-modal



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                  | Description | Type     | Default     |
| ------------------------ | -------------------------- | ----------- | -------- | ----------- |
| `currentDate`            | `current-date`             |             | `any`    | `undefined` |
| `currentlySelectedDay`   | `currently-selected-day`   |             | `number` | `undefined` |
| `currentlySelectedMonth` | `currently-selected-month` |             | `number` | `undefined` |
| `currentlySelectedYear`  | `currently-selected-year`  |             | `number` | `undefined` |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `dateSelection` |             | `CustomEvent<any>` |
| `modalClose`    |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [date-selector](../date-selector)

### Graph
```mermaid
graph TD;
  date-selector --> task-date-modal
  style task-date-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
