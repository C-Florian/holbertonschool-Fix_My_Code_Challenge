#include "lists.h"
#include <stdlib.h>

/**
 * delete_dnodeint_at_index - deletes the node at index of a dlistint_t list
 * @head: address of the head pointer
 * @index: 0-based index of the node to delete
 * Return: 1 on success, -1 on failure
 */
int delete_dnodeint_at_index(dlistint_t **head, unsigned int index)
{
    dlistint_t *node;
    unsigned int i;

    if (head == NULL || *head == NULL)
        return (-1);

    node = *head;

    /* walk to index */
    for (i = 0; node != NULL && i < index; i++)
        node = node->next;

    if (node == NULL) /* out of range */
        return (-1);

    /* unlink from previous (head case advances *head) */
    if (node->prev == NULL)
        *head = node->next;
    else
        node->prev->next = node->next;

    /* unlink from next (tail case does nothing here) */
    if (node->next != NULL)
        node->next->prev = node->prev;

    free(node);
    return (1);
}
