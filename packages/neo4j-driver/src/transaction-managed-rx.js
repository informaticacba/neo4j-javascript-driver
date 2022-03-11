/**
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import RxTransaction from './transaction-rx'

/**
 * Represents a RX transaction that is managed by the transaction executor.
 *
 * @public
 */
class RxManagedTransaction extends RxTransaction {
  /**
   *  Commits the transaction.
   *
   * @public
   * @deprecated Commit should be done by returning from the transaction work.
   * @returns {Observable} - An empty observable
   */
  commit () {
    return super.commit()
  }

  /**
   *  Rolls back the transaction.
   *
   * @public
   * @deprecated Rollback should be done by throwing or returning a rejected promise from the transaction work.
   * @returns {Observable} - An empty observable
   */
  rollback () {
    return super.rollback()
  }

  /**
   * Closes the transaction
   *
   * This method will roll back the transaction if it is not already committed or rolled back.
   * @deprecated Closure should not be done in transaction work. See {@link RxManagedTransaction#commit} and {@link RxManagedTransaction#rollback}
   * @returns {Observable} - An empty observable
   */
  close () {
    return super.close()
  }
}

export default RxManagedTransaction
