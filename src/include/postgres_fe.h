/*-------------------------------------------------------------------------
 *
 * postgres_fe.h
 *	  Primary include file for PostgreSQL client-side .c files
 *
 * This should be the first file included by PostgreSQL client libraries and
 * application programs --- but not by backend modules, which should include
 * postgres.h.
 *
 *
 * Portions Copyright (c) 1996-2025, PostgreSQL Global Development Group
 * Portions Copyright (c) 1995, Regents of the University of California
 *
 * src/include/postgres_fe.h
 *
 *-------------------------------------------------------------------------
 */
/* IWYU pragma: always_keep */
#ifndef POSTGRES_FE_H
#define POSTGRES_FE_H

#ifndef FRONTEND
#define FRONTEND 1
#endif

/* IWYU pragma: begin_exports */

#include "c.h"

#include "common/fe_memutils.h"

/* IWYU pragma: end_exports */

#endif							/* POSTGRES_FE_H */
