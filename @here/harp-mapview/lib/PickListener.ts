/*
 * Copyright (C) 2017-2020 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { PickParams } from "./IntersectParams";
import { PickResult } from "./PickHandler";

export class PickListener {
    private m_results: PickResult[] = [];

    constructor(private readonly m_parameters?: PickParams) {}

    addResult(result: PickResult): boolean {
        if (this.done) {
            return false;
        }
        this.m_results.push(result);
        return true;
    }

    get done(): boolean {
        return this.m_results.length >= this.maxResults;
    }

    get results(): PickResult[] {
        return this.m_results;
    }

    private get maxResults(): number {
        return this.m_parameters?.maxResults ?? Infinity;
    }
}
